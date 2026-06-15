global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = require('crypto').webcrypto;
}
