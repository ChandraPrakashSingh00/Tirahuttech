// src/utils/ApiError.js
// Standardized "operational" error we can throw anywhere in the app.
// The central error middleware knows how to turn this into a clean
// JSON response instead of leaking stack traces to clients.

class ApiError extends Error {
  constructor(statusCode, message, details = undefined) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.details = details;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
