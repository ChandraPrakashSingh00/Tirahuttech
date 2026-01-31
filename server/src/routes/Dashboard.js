const router = require("express").Router();
const dashboard = require("../Controller/dashboardController");

router.get("/", dashboard.getDashboard);

module.exports = router;
