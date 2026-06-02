global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
if (typeof window !== 'undefined') {
  window.crypto = require('crypto').webcrypto;
}
