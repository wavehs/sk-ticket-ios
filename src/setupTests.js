global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = {
    getRandomValues: function(arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 4294967296);
      }
    }
  };
}
