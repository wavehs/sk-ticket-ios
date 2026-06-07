global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;

if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = {
    getRandomValues: function(buffer) {
      return require('crypto').randomFillSync(buffer);
    }
  };
}
