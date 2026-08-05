// src/validators/form.validator.js
// Small dependency-free validators. Swap for Joi/zod later if the
// schemas grow more complex — call sites won't need to change.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(body = {}) {
  const { fullName, email, message } = body;
  const errors = [];

  if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
    errors.push("fullName is required");
  }
  if (!email || !EMAIL_RE.test(email)) {
    errors.push("A valid email is required");
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    errors.push("message is required");
  }

  return errors;
}

function validateEnquiry(body = {}) {
  const { fullName, businessEmail, phoneNumber, state, requirements } = body;
  const errors = [];

  if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
    errors.push("fullName is required");
  }
  if (!businessEmail || !EMAIL_RE.test(businessEmail)) {
    errors.push("A valid businessEmail is required");
  }
  if (!phoneNumber || typeof phoneNumber !== "string" || !phoneNumber.trim()) {
    errors.push("phoneNumber is required");
  }
  if (!state || typeof state !== "string" || !state.trim()) {
    errors.push("state is required");
  }
  if (!requirements || typeof requirements !== "string" || !requirements.trim()) {
    errors.push("requirements is required");
  }

  return errors;
}

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5MB

function validateCareer(body = {}) {
  const {
    fullName,
    email,
    phone,
    roleAppliedFor,
    resumeFileName,
    resumeMimeType,
    resumeBase64,
  } = body;
  const errors = [];

  if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
    errors.push("fullName is required");
  }
  if (!email || !EMAIL_RE.test(email)) {
    errors.push("A valid email is required");
  }
  if (!phone || typeof phone !== "string" || !phone.trim()) {
    errors.push("phone is required");
  }
  if (!roleAppliedFor || typeof roleAppliedFor !== "string" || !roleAppliedFor.trim()) {
    errors.push("roleAppliedFor is required");
  }
  if (!resumeFileName || typeof resumeFileName !== "string") {
    errors.push("resumeFileName is required");
  }
  if (!resumeMimeType || !ALLOWED_RESUME_TYPES.includes(resumeMimeType)) {
    errors.push("resume must be a PDF or Word document (.pdf, .doc, .docx)");
  }
  if (!resumeBase64 || typeof resumeBase64 !== "string" || !resumeBase64.length) {
    errors.push("resume file is required");
  } else {
    // Rough size check from base64 length (~4/3 expansion) before
    // ever allocating a Buffer for it.
    const approxBytes = Math.floor((resumeBase64.length * 3) / 4);
    if (approxBytes > MAX_RESUME_BYTES) {
      errors.push("resume file must be smaller than 5MB");
    }
  }

  return errors;
}

module.exports = { validateContact, validateEnquiry, validateCareer, MAX_RESUME_BYTES };
