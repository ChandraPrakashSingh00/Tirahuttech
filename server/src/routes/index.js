const router = require("express").Router();

const trackRoutes = require("./track.routes");
const dashboardRoutes = require("./dashboard.routes");
const formRoutes = require("./form.routes");

router.use("/track", trackRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api/Form", formRoutes);

module.exports = router;
