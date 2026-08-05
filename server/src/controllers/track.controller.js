const Visitor = require("../models/visitor.model");
const Event = require("../models/event.model");
const Session = require("../models/session.model");
const Lead = require("../models/lead.model");
const { hashIp } = require("../utils/hash");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

function safeString(s) {
  return typeof s === "string" ? s : "";
}

// POST /track
exports.track = asyncHandler(async (req, res) => {
  const visitorId = req.visitorId;
  if (!visitorId) throw new ApiError(400, "visitorId missing");

  const payload = req.body || {};
  const eventType = safeString(payload.eventType) || "event";
  const eventName = safeString(payload.eventName);
  const url = safeString(payload.url) || safeString(req.body.page || req.headers.referer || "");
  const meta = payload.meta || {};
  const sessionId = safeString(payload.sessionId) || null;

  if (!eventType) throw new ApiError(400, "eventType required");

  const rawIp = req.headers["x-forwarded-for"] || req.connection?.remoteAddress || req.ip;
  const ipHash = hashIp(rawIp);
  const userAgent = req.headers["user-agent"] || "";

  // Upsert visitor document
  await Visitor.updateOne(
    { visitorId },
    {
      $set: { lastSeen: new Date(), ipHash },
      $push: { userAgents: { ua: userAgent, at: new Date() } },
      $inc: { visitsCount: 1 },
    },
    { upsert: true }
  );

  // Create event
  const ev = await Event.create({
    visitorId,
    sessionId,
    eventType,
    eventName,
    url,
    ipHash,
    userAgent,
    properties: meta,
  });

  // Optionally update/create session (simple logic: extend or create)
  if (sessionId) {
    const now = new Date();
    const sessionUpdate = {
      $set: { exitUrl: url, device: meta.device || undefined, campaign: meta.campaign || undefined },
      $push: { pages: { url, title: payload.pageTitle || "", ts: now } },
      $setOnInsert: { startAt: now },
    };
    await Session.updateOne({ sessionId }, sessionUpdate, { upsert: true });
  }

  res.json({ ok: true, eventId: ev._id });
});

// POST /track/identify — convert a visitor into a lead once email/phone is known
exports.identify = asyncHandler(async (req, res) => {
  const visitorId = req.visitorId;
  const { email, phone, name, source, utm } = req.body;
  if (!email && !phone) throw new ApiError(400, "email or phone required to identify");

  const leadDoc = {
    visitorId,
    name: name || undefined,
    source: source || undefined,
    utm: utm || undefined,
  };

  const push = {};
  if (email) push.emails = { value: email, verified: false, source: "form", addedAt: new Date() };
  if (phone) push.phones = { value: phone, verified: false, source: "form", addedAt: new Date() };

  const lead = await Lead.findOneAndUpdate(
    { visitorId },
    {
      $setOnInsert: { createdAt: new Date(), leadCode: `L-${Date.now()}` },
      $set: leadDoc,
      ...(Object.keys(push).length ? { $push: push } : {}),
    },
    { upsert: true, new: true }
  );

  // Link visitor to lead
  await Visitor.updateOne({ visitorId }, { $set: { leadId: lead._id } });

  res.json({ ok: true, lead });
});
