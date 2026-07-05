global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;

if (typeof globalThis.crypto === 'undefined' || !globalThis.crypto.getRandomValues) {
  globalThis.crypto = require('node:crypto').webcrypto;
}
