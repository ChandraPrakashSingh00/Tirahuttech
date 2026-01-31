// utils/hash.js
const crypto = require('crypto');
const SECRET = process.env.IPHASH_SECRET;

if (!SECRET) {
  throw new Error('IPHASH_SECRET must be set in env');
}

function hashIp(ip, version = 'v1') {
  // Accept 'ip' like "127.0.0.1" or "x.x.x.x, y.y.y.y" -> use first
  const raw = (ip || '').split(',')[0].trim();
  if (!raw) return null;
  const hmac = crypto.createHmac('sha256', SECRET);
  hmac.update(raw);
  return `${version}:${hmac.digest('hex')}`;
}

module.exports = { hashIp };
