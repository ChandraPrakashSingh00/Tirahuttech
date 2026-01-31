const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = require("./src/app")
const PORT = process.env.PORT || 5000;
const connectDB = require("./src/config/db");

// Connect to Database
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

