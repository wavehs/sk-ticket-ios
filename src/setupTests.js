const crypto = require('crypto');

// Polyfill crypto if not present
if (typeof globalThis.crypto === 'undefined' || typeof globalThis.crypto.getRandomValues === 'undefined') {
  Object.defineProperty(globalThis, 'crypto', {
    value: {
      getRandomValues: (arr) => crypto.randomFillSync(arr)
    }
  });
}

global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
