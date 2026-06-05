global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
if (typeof globalThis.crypto === 'undefined') {
  const crypto = require('crypto');
  globalThis.crypto = {
    getRandomValues: function (buffer) {
      return crypto.randomFillSync(buffer);
    }
  };
}
