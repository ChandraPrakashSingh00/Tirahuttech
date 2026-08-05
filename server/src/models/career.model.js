const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    roleAppliedFor: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      default: "",
      trim: true,
    },
    portfolioUrl: {
      type: String,
      default: "",
      trim: true,
    },
    coverMessage: {
      type: String,
      default: "",
      trim: true,
    },
    resumeFileName: {
      type: String,
      required: true,
    },
    resumeMimeType: {
      type: String,
      required: true,
    },
    resumeSizeBytes: {
      type: Number,
      required: true,
    },
    // Resume file content, stored as base64. Kept out of default
    // query projections so list views stay lightweight; fetched
    // explicitly (with .select("+resumeBase64")) for downloads.
    resumeBase64: {
      type: String,
      required: true,
      select: false,
    },
    status: {
      type: String,
      enum: ["new", "reviewed", "shortlisted", "rejected", "hired"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", careerSchema);
