global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;

const crypto = require('crypto');
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = {
    getRandomValues: function (buffer) {
      return crypto.randomFillSync(buffer);
    }
  };
}
