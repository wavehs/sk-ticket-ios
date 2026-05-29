global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
const crypto = require('crypto');
const cryptoObj = {
  getRandomValues: (buffer) => crypto.randomFillSync(buffer)
};
if (global.self) {
  global.self.crypto = cryptoObj;
} else {
  global.self = { crypto: cryptoObj };
}
global.crypto = cryptoObj;
globalThis.crypto = cryptoObj;
if (typeof window !== 'undefined') {
  window.crypto = cryptoObj;
}
