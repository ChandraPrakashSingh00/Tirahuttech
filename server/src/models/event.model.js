// models/Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  visitorId:        { type: String, required: true, index: true },
  sessionId:        { type: String, index: true },
  eventType:        { type: String, required: true, index: true }, // page_view, click, form_submit...
  eventName:        { type: String },
  timestamp:        { type: Date, default: Date.now, index: true },
  url:              { type: String, index: true },
  pageTitle:        { type: String },
  referrer:         { type: String },
  referrerDomain:   { type: String, index: true },
  ipHash:           { type: String, index: true },
  userAgent:        { type: String },
  browser:          { name: String, version: String },
  os:               { name: String, version: String },
  device:           { type: String },
  screen:           { width: Number, height: Number },
  locale:           { type: String },
  geo:              { country: String, region: String, city: String },
  utm: {
    source: String,
    medium: String,
    campaign: String,
    term: String,
    content: String
  },
  metrics: {
    durationMs: Number,
    scrollDepth: Number,
    elementX: Number,
    elementY: Number
  },
  properties:        { type: mongoose.Schema.Types.Mixed },
  processed:         { type: Boolean, default: false }
}, { strict: false });

EventSchema.index({ visitorId: 1, timestamp: -1 });
EventSchema.index({ eventType: 1, timestamp: -1 });

module.exports = mongoose.model('Event', EventSchema);
