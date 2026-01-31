// controllers/trackController.js
const Contact = require("../models/Contact");
const axios = require("axios");
const Enquiry = require("../models/Enquiry");

exports.createMessage = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1. Save to MongoDB (primary)
    const newContact = await Contact.create({
      fullName,
      email,
      message
    });

    // 2. Fire-and-forget to Google Sheet
    axios.post(process.env.SHEET_WEBHOOK_URL, {
      secret: process.env.SHEET_SECRET,
      fullName,
      email,
      message
    }).catch(err => {
      // Important: do NOT fail the request
      console.error("Sheet logging failed");
    });

    res.status(201).json({
      success: true,
      data: newContact
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createEnquiry = async (req, res) => {
  try {
    const {
      fullName,
      businessEmail,
      phoneNumber,
      state,
      requirements
    } = req.body;

    if (
      !fullName ||
      !businessEmail ||
      !phoneNumber ||
      !state ||
      !requirements
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // 1. Save to MongoDB (source of truth)
    const enquiry = await Enquiry.create({
      fullName,
      businessEmail,
      phoneNumber,
      state,
      requirements
    });

    // 2. Async log to Google Sheet (hybrid)
    axios
      .post(process.env.ENQUIRY_SHEET_WEBHOOK_URL, {
        secret: process.env.SHEET_SECRET,
        fullName,
        businessEmail,
        phoneNumber,
        state,
        requirements
      })
      .catch(() => {
        console.error("Enquiry sheet logging failed");
      });

    res.status(201).json({
      success: true,
      data: enquiry
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};
 