// models/Lead.js
const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  leadCode:         { type: String, index: true },
  visitorId:        { type: String, index: true },
  createdAt:        { type: Date, default: Date.now, index: true },
  name:             { type: String },
  emails:           [{ value: String, verified: Boolean, source: String, addedAt: Date }],
  phones:           [{ value: String, verified: Boolean, source: String, addedAt: Date }],
  source:           { type: String },
  utm:              { source: String, medium: String, campaign: String },
  leadScore:        { type: Number, default: 0 },
  status:           { type: String, enum: ['new','contacted','qualified','disqualified','won','lost'], default: 'new', index: true },
  lastContactedAt:  { type: Date },
  ownerId:          { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notes:            [{ text: String, by: String, at: Date }],
  meta:             { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

module.exports = mongoose.model('Lead', LeadSchema);
