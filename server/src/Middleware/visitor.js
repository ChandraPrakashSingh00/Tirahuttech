// middleware/visitor.js
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");

const COOKIE_NAME = "visitorId";
const COOKIE_MAX_AGE =
  Number(process.env.COOKIE_MAX_AGE_MS) ||
  1000 * 60 * 60 * 24 * 365;

function visitorMiddleware(req, res, next) {
  let vid = req.cookies && req.cookies[COOKIE_NAME];

  if (!vid) {
    vid = `v_${uuidv4()}`;
    const isProd = process.env.NODE_ENV === "production";

    res.cookie(COOKIE_NAME, vid, {
      httpOnly: false, // agar frontend JS ko read karna hai
      secure: isProd,
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
    });
  }

  req.visitorId = vid;
  next();
}

module.exports = visitorMiddleware;
