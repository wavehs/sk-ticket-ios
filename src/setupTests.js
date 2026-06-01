global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;

const crypto = require('crypto');
const cryptoMock = {
  getRandomValues: function(buffer) {
    return crypto.randomFillSync(buffer);
  }
};

global.crypto = cryptoMock;
globalThis.crypto = cryptoMock;
if (typeof window !== 'undefined') {
  window.crypto = cryptoMock;
}
if (typeof self !== 'undefined') {
  self.crypto = cryptoMock;
} else {
  global.self = global;
  self.crypto = cryptoMock;
}
