global.TextEncoder = require('util').TextEncoder; global.TextDecoder = require('util').TextDecoder;
global.self = global; global.self.crypto = { getRandomValues: require('crypto').randomFillSync };
