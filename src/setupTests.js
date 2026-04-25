global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
const crypto = require('crypto');
global.crypto = {
  getRandomValues: arr => crypto.randomFillSync(arr)
};
