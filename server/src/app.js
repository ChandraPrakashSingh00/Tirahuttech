const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Routes
const trackRoutes = require("./routes/Track");
const Dashroutes = require("./routes/Dashboard");
const Formroutes = require("./routes/Forms");

// Middleware
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.get("/", (req, res) => {
  res.send("Server is running");
});

// Api Routes
app.use('/track', trackRoutes);
app.use("/dashboard",Dashroutes);
app.use("/api/Form", Formroutes);

// Error Handling Middleware
// basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'server_error' });
});

module.exports = app;