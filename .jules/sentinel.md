## 2024-05-18 - Fix weak random number generation
**Vulnerability:** Found `Math.random()` used to generate device IDs in `src/util/subscription.js` which is predictable and insufficient for binding subscriptions securely.
**Learning:** React client apps generating IDs for crypto/auth bindings must use `globalThis.crypto.getRandomValues()` instead of `Math.random()`. Using Web Crypto API required updating `src/setupTests.js` to polyfill `global.self.crypto.getRandomValues` using Node.js `crypto.randomFillSync()` to prevent breaking the Jest environment.
**Prevention:** Avoid `Math.random()` for any security-related ID generation. Always use CSPRNGs (Cryptographically Secure Pseudo-Random Number Generators).
