global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;

const crypto = require('crypto');
global.self = global.self || {};
global.self.crypto = global.self.crypto || {
  getRandomValues: function(buffer) {
    return crypto.randomFillSync(buffer);
  }
};
global.crypto = global.self.crypto;
