// middlewares/visitor.middleware.js
const { v4: uuidv4 } = require("uuid");
const env = require("../config/env");

const COOKIE_NAME = "visitorId";

function visitorMiddleware(req, res, next) {
  const vid = req.cookies?.[COOKIE_NAME];

  if (!vid) {
    const newVid = `v_${uuidv4()}`;

    res.cookie(COOKIE_NAME, newVid, {
      httpOnly: false,
      secure: env.isProduction,
      sameSite: "lax",
      maxAge: env.cookieMaxAgeMs,
    });

    req.visitorId = newVid;
  } else {
    req.visitorId = vid;
  }

  next();
}

module.exports = visitorMiddleware;
