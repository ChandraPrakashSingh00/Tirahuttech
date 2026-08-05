const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    businessEmail: {
      type: String,
      required: true,
      lowercase: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    requirements: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
