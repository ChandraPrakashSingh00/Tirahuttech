// middleware/visitor.js
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");

const COOKIE_NAME = "visitorId";
const COOKIE_MAX_AGE =
  Number(process.env.COOKIE_MAX_AGE_MS) ||
  1000 * 60 * 60 * 24 * 365;

function visitorMiddleware(req, res, next) {
  // cookie-parser must be used before this middleware
  const vid = req.cookies?.[COOKIE_NAME];

  if (!vid) {
    const newVid = `v_${uuidv4()}`;
    const isProd = process.env.NODE_ENV === "production";

    res.cookie(COOKIE_NAME, newVid, {
      httpOnly: false,
      secure: isProd,
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
    });

    req.visitorId = newVid;
  } else {
    req.visitorId = vid;
  }

  next();
}

module.exports = visitorMiddleware;
