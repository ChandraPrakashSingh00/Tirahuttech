// src/middlewares/error.middleware.js
// Single place where every error in the app ends up. Keeps controllers
// free of res.status(...).json(...) boilerplate for the failure path.

const env = require("../config/env");
const logger = require("../config/logger");

// Must be declared with 4 args so Express recognizes it as an error handler.
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode && err.statusCode >= 400 ? err.statusCode : 500;

  // Only log unexpected (non-operational) errors loudly / with stack traces.
  if (!err.isOperational) {
    logger.error(`${req.method} ${req.originalUrl} ->`, err);
  } else {
    logger.warn(`${req.method} ${req.originalUrl} -> ${err.message}`);
  }

  res.status(statusCode).json({
    success: false,
    message: err.isOperational ? err.message : "Something went wrong. Please try again later.",
    ...(err.details ? { details: err.details } : {}),
    ...(env.isProduction ? {} : { stack: err.stack }),
  });
};

module.exports = errorHandler;
