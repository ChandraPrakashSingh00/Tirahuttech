// src/config/logger.js
// Minimal dependency-free logger. Swap the internals for winston/pino
// later without touching call sites elsewhere in the app.

const env = require("./env");

const timestamp = () => new Date().toISOString();

const logger = {
  info: (...args) => console.log(`[INFO] ${timestamp()} -`, ...args),
  warn: (...args) => console.warn(`[WARN] ${timestamp()} -`, ...args),
  error: (...args) => console.error(`[ERROR] ${timestamp()} -`, ...args),
  debug: (...args) => {
    if (!env.isProduction) {
      console.debug(`[DEBUG] ${timestamp()} -`, ...args);
    }
  },
};

module.exports = logger;
