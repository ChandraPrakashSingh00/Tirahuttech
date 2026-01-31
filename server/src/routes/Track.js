// routes/track.js
const express = require('express');
const router = express.Router();
const visitorMiddleware = require("../Middleware/visitor");
const controller = require('../Controller/trackController');

// POST /track  - record event
router.post('/', visitorMiddleware, controller.track);

// POST /track/identify - convert visitor -> lead (call when email/phone submitted)
router.post('/identify', visitorMiddleware, controller.identify);

module.exports = router;
