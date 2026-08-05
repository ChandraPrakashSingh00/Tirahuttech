const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

const env = require("./config/env");
const routes = require("./routes");
const notFound = require("./middlewares/notFound.middleware");
const errorHandler = require("./middlewares/error.middleware");
const { apiLimiter } = require("./middlewares/rateLimiter.middleware");

const app = express();

// Trust the first proxy (needed on Render/Heroku/Nginx etc. for correct
// req.ip / x-forwarded-for and for the "secure" cookie flag to work).
app.set("trust proxy", 1);

// --- Security & performance middleware ---
app.use(helmet());
app.use(compression());
app.use(morgan(env.isProduction ? "combined" : "dev"));

// --- Body parsing ---
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true, limit: "200kb" }));
app.use(cookieParser());

// --- CORS ---
app.use(
  cors({
    origin: env.frontendUrl,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// --- Rate limiting (applies to all API routes) ---
app.use(apiLimiter);

// --- Health check (for uptime monitors / load balancers) ---
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// --- API routes ---
app.use("/", routes);

// --- 404 + centralized error handling (must be last) ---
app.use(notFound);
app.use(errorHandler);

module.exports = app;
