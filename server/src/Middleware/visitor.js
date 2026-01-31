// middleware/visitor.js
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser');

const COOKIE_NAME = 'visitorId';
const COOKIE_MAX_AGE = Number(process.env.COOKIE_MAX_AGE_MS) || 1000 * 60 * 60 * 24 * 365;

function visitorMiddleware(req, res, next) {
  // cookie-parser must be used before this middleware in app
  let vid = req.cookies && req.cookies[COOKIE_NAME];

  if (!vid) {
    vid = `v_${uuidv4()}`;
    const isProd = process.env.NODE_ENV === 'production';
    res.cookie(COOKIE_NAME, vid, {
      httpOnly: false,      // set to true if you don't need client JS to read it
      secure: isProd,       // true in prod (HTTPS)
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE
    });
  }

  req.visitorId = vid;
  next();
}

module.exports = visitorMiddleware;
