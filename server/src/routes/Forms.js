const express = require("express");
const router = express.Router();
const { createMessage ,createEnquiry} = require("../Controller/FormController");

router.post("/contact", createMessage);


router.post("/enquiry", createEnquiry);
module.exports = router;
