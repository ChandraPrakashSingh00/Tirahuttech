// controllers/trackController.js
const Visitor = require('../models/Visitor');
const Event = require('../models/Event');
const Session = require("../models/Session");
const Lead = require('../models/Lead');
const { hashIp } = require('../utils/hash');

function safeString(s) { return typeof s === 'string' ? s : ''; }

exports.track = async (req, res) => {
  try {
    console.log("triggered");
    const visitorId = req.visitorId;
    if (!visitorId) return res.status(400).json({ error: 'visitorId missing' }); 

    const payload = req.body || {};
    const eventType = safeString(payload.eventType) || 'event';
    const eventName = safeString(payload.eventName);
    const url = safeString(payload.url) || safeString(req.body.page || req.headers.referer || '');
    const meta = payload.meta || {};
    const sessionId = safeString(payload.sessionId) || null;

    // Basic validation
    if (!eventType) return res.status(400).json({ error: 'eventType required' });

    const rawIp = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || req.ip;
    const ipHash = hashIp(rawIp);
    const userAgent = req.headers['user-agent'] || '';

    // Upsert visitor document
    await Visitor.updateOne(
      { visitorId },
      {
        $set: { lastSeen: new Date(), ipHash },
        $push: { userAgents: { ua: userAgent, at: new Date() } },
        $inc: { visitsCount: 1 }
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
      properties: meta
    });

    // Optionally update/create session (simple logic: extend or create)
    if (sessionId) {
      const now = new Date();
      const sessionUpdate = {
        $set: { exitUrl: url, device: meta.device || undefined, campaign: meta.campaign || undefined },
        $push: { pages: { url, title: payload.pageTitle || '', ts: now } },
        $setOnInsert: { startAt: now }
      };
      await Session.updateOne({ sessionId }, sessionUpdate, { upsert: true });
    }

    res.json({ ok: true, eventId: ev._id });
  } catch (err) {
    console.error('track error', err);
    res.status(500).json({ error: 'tracking_failed' });
  }
};

// Helper: convert a visitor to lead (call this when email/phone is provided)
exports.identify = async (req, res) => {
  try {
    const visitorId = req.visitorId;
    const { email, phone, name, source, utm } = req.body;
    if (!email && !phone) return res.status(400).json({ error: 'email or phone required to identify' });

    // Upsert Lead
    const leadDoc = {
      visitorId,
      name: name || undefined,
      $push: {},
      source: source || undefined,
      utm: utm || undefined
    };

    if (email) leadDoc.$push['emails'] = { value: email, verified: false, source: 'form', addedAt: new Date() };
    if (phone) leadDoc.$push['phones'] = { value: phone, verified: false, source: 'form', addedAt: new Date() };

    // Try update existing lead for this visitor or create
    let lead = await Lead.findOneAndUpdate(
      { visitorId },
      { $setOnInsert: { createdAt: new Date(), leadCode: `L-${Date.now()}` }, ...leadDoc },
      { upsert: true, new: true }
    );

    // Link visitor to lead
    await require('../models/Visitor').updateOne({ visitorId }, { $set: { leadId: lead._id } });

    res.json({ ok: true, lead });
  } catch (err) {
    console.error('identify error', err);
    res.status(500).json({ error: 'identify_failed' });
  }
};
