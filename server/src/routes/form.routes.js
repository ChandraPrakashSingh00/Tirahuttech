const express = require("express");
const router = express.Router();
const {
  createMessage,
  createEnquiry,
  createCareerApplication,
  listCareerApplications,
  downloadCareerResume,
} = require("../controllers/form.controller");
const { formLimiter } = require("../middlewares/rateLimiter.middleware");

// Resumes travel as base64 JSON, so this route needs a bigger body
// limit than the 200kb default applied globally in app.js.
const careerBodyParser = express.json({ limit: "8mb" });

router.post("/contact", formLimiter, createMessage);
router.post("/enquiry", formLimiter, createEnquiry);
router.post("/career", careerBodyParser, formLimiter, createCareerApplication);
router.get("/career", listCareerApplications);
router.get("/career/:id/resume", downloadCareerResume);

module.exports = router;
