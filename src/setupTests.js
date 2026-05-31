global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
const crypto = require('crypto');
global.crypto = {
  getRandomValues: function (buffer) {
    return crypto.randomFillSync(buffer);
  }
};
globalThis.crypto = global.crypto;
window.crypto = global.crypto;
self.crypto = global.crypto;
