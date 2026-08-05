const express = require("express");
const router = express.Router();
const visitorMiddleware = require("../middlewares/visitor.middleware");
const controller = require("../controllers/track.controller");

// POST /track — record event
router.post("/", visitorMiddleware, controller.track);

// POST /track/identify — convert visitor -> lead (call when email/phone submitted)
router.post("/identify", visitorMiddleware, controller.identify);

module.exports = router;
