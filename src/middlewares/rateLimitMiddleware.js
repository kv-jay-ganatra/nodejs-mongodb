const {rateLimit} = require('express-rate-limit');
require('dotenv').config();
const limiter = rateLimit({
  windowMs: 1000, // 1 sec
  max: process.env.MAX_REQ_PER_SECOND || 10,
  message: 'Too many requests are comming, please try again after some time.',
});
module.exports = limiter;
