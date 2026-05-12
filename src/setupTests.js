global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;

const crypto = require('crypto');
Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomFillSync(arr)
  }
});
