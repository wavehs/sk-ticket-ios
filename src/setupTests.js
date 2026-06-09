global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = {
    getRandomValues: function (buffer) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.floor(Math.random() * 256);
      }
      return buffer;
    }
  };
}
