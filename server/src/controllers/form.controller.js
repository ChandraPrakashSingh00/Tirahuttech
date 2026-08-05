const axios = require("axios");
const Contact = require("../models/contact.model");
const Enquiry = require("../models/enquiry.model");
const Career = require("../models/career.model");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const logger = require("../config/logger");
const env = require("../config/env");
const { validateContact, validateEnquiry, validateCareer } = require("../validators/form.validator");

// POST /api/Form/contact
exports.createMessage = asyncHandler(async (req, res) => {
  const errors = validateContact(req.body);
  if (errors.length) {
    throw new ApiError(400, "Invalid input", errors);
  }

  const { fullName, email, message } = req.body;

  // 1. Save to MongoDB (primary, source of truth)
  const newContact = await Contact.create({ fullName, email, message });

  // 2. Fire-and-forget mirror to Google Sheet — never blocks/fails the request
  if (env.sheetWebhookUrl) {
    axios
      .post(env.sheetWebhookUrl, { secret: env.sheetSecret, fullName, email, message })
      .catch(() => logger.warn("Contact sheet logging failed"));
  }

  res.status(201).json({ success: true, data: newContact });
});

// POST /api/Form/enquiry
exports.createEnquiry = asyncHandler(async (req, res) => {
  const errors = validateEnquiry(req.body);
  if (errors.length) {
    throw new ApiError(400, "Invalid input", errors);
  }

  const { fullName, businessEmail, phoneNumber, state, requirements } = req.body;

  // 1. Save to MongoDB (source of truth)
  const enquiry = await Enquiry.create({
    fullName,
    businessEmail,
    phoneNumber,
    state,
    requirements,
  });

  // 2. Async mirror to Google Sheet (hybrid logging)
  if (env.enquirySheetWebhookUrl) {
    axios
      .post(env.enquirySheetWebhookUrl, {
        secret: env.sheetSecret,
        fullName,
        businessEmail,
        phoneNumber,
        state,
        requirements,
      })
      .catch(() => logger.warn("Enquiry sheet logging failed"));
  }

  res.status(201).json({ success: true, data: enquiry });
});

// POST /api/Form/career
exports.createCareerApplication = asyncHandler(async (req, res) => {
  const errors = validateCareer(req.body);
  if (errors.length) {
    throw new ApiError(400, "Invalid input", errors);
  }

  const {
    fullName,
    email,
    phone,
    roleAppliedFor,
    experience,
    portfolioUrl,
    coverMessage,
    resumeFileName,
    resumeMimeType,
    resumeBase64,
  } = req.body;

  const resumeSizeBytes = Math.floor((resumeBase64.length * 3) / 4);

  // 1. Save to MongoDB (primary, source of truth) — resume kept as
  // base64 so no filesystem/object-storage dependency is required.
  const application = await Career.create({
    fullName,
    email,
    phone,
    roleAppliedFor,
    experience,
    portfolioUrl,
    coverMessage,
    resumeFileName,
    resumeMimeType,
    resumeSizeBytes,
    resumeBase64,
  });

  // 2. Fire-and-forget mirror to Google Sheet (text fields only —
  // the resume itself is retrievable from the admin dashboard).
  if (env.careerSheetWebhookUrl) {
    axios
      .post(env.careerSheetWebhookUrl, {
        secret: env.sheetSecret,
        fullName,
        email,
        phone,
        roleAppliedFor,
        experience,
        portfolioUrl,
        resumeFileName,
      })
      .catch(() => logger.warn("Career sheet logging failed"));
  }

  res.status(201).json({
    success: true,
    data: {
      id: application._id,
      fullName: application.fullName,
      roleAppliedFor: application.roleAppliedFor,
      createdAt: application.createdAt,
    },
  });
});

// GET /api/Form/career — list applications (resume content excluded)
exports.listCareerApplications = asyncHandler(async (req, res) => {
  const applications = await Career.find().sort({ createdAt: -1 });
  res.json({ success: true, data: applications });
});

// GET /api/Form/career/:id/resume — stream the stored resume back down
exports.downloadCareerResume = asyncHandler(async (req, res) => {
  const application = await Career.findById(req.params.id).select("+resumeBase64");
  if (!application) {
    throw new ApiError(404, "Application not found");
  }

  const buffer = Buffer.from(application.resumeBase64, "base64");
  res.setHeader("Content-Type", application.resumeMimeType);
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${application.resumeFileName}"`
  );
  res.send(buffer);
});
