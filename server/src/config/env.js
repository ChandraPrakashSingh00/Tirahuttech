// src/config/env.js
// Centralized, validated access to environment variables.
// Fail fast at boot if a required variable is missing instead of
// crashing later, mid-request, somewhere deep in the code.

const REQUIRED_VARS = ["MONGO_URI", "IPHASH_SECRET", "FRONTEND_URL"];

function loadEnv() {
  const missing = REQUIRED_VARS.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    // eslint-disable-next-line no-console
    console.error(
      `[env] Missing required environment variable(s): ${missing.join(", ")}`
    );
    process.exit(1);
  }

  return {
    nodeEnv: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT) || 5000,
    mongoUri: process.env.MONGO_URI,
    frontendUrl: process.env.FRONTEND_URL,
    ipHashSecret: process.env.IPHASH_SECRET,
    cookieMaxAgeMs: Number(process.env.COOKIE_MAX_AGE_MS) || 1000 * 60 * 60 * 24 * 365,
    sheetWebhookUrl: process.env.SHEET_WEBHOOK_URL || "",
    sheetSecret: process.env.SHEET_SECRET || "",
    enquirySheetWebhookUrl: process.env.ENQUIRY_SHEET_WEBHOOK_URL || "",
    careerSheetWebhookUrl: process.env.CAREER_SHEET_WEBHOOK_URL || "",
    isProduction: (process.env.NODE_ENV || "development") === "production",
  };
}

const env = loadEnv();

module.exports = env;
