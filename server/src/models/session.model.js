// models/Session.js
const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  sessionId:        { type: String, required: true, unique: true, index: true },
  visitorId:        { type: String, required: true, index: true },
  startAt:          { type: Date, default: Date.now, index: true },
  endAt:            { type: Date },
  durationMs:       { type: Number },
  pages:            [{ url: String, title: String, ts: Date }],
  entryUrl:         { type: String },
  exitUrl:          { type: String },
  device:           { type: String },
  campaign:         { type: String },
  meta:             { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

module.exports = mongoose.model('Session', SessionSchema);
