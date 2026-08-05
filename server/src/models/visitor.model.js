// models/Visitor.js
const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
  visitorId:        { type: String, required: true, unique: true, index: true },
  firstSeen:        { type: Date, default: Date.now, index: true },
  lastSeen:         { type: Date, default: Date.now, index: true },
  visitsCount:      { type: Number, default: 0 },
  ipHash:           { type: String, index: true },
  userAgents:       [{ ua: String, at: Date }],
  deviceTypes:      [{ type: String }],
  countries:        [{ country: String, firstSeen: Date, lastSeen: Date }],
  tags:             [{ type: String }],
  consent: {
    marketing:      { type: Boolean, default: false },
    privacyVersion: { type: String },
    consentAt:      { type: Date }
  },
  leadId:           { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', index: true, sparse: true },
  meta:             { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

module.exports = mongoose.model('Visitor', VisitorSchema);
