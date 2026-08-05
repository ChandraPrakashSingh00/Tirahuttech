require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const env = require("./config/env");
const logger = require("./config/logger");

let server;

(async () => {
  await connectDB();

  server = app.listen(env.port, () => {
    logger.info(`Server is running on port ${env.port} [${env.nodeEnv}]`);
  });
})();

// --- Graceful shutdown ---
const shutdown = (signal) => {
  logger.info(`${signal} received. Shutting down gracefully...`);
  if (server) {
    server.close(() => {
      logger.info("HTTP server closed.");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("unhandledRejection", (reason) => {
  logger.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err);
  process.exit(1);
});
