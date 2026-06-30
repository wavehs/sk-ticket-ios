## 2024-06-30 - Fix Weak PRNG in Device ID Generation
**Vulnerability:** Weak random number generation using `Math.random()` to generate `deviceId` in `src/util/subscription.js`.
**Learning:** Even for non-cryptographic keys like a Device ID, using `Math.random()` can lead to predictability, especially if the space is small or used alongside other security tokens. Additionally, Jest/JSDom environments often lack `globalThis.crypto.getRandomValues`, which requires polyfilling via Node's `crypto.webcrypto`.
**Prevention:** Use `globalThis.crypto.getRandomValues()` for generating random IDs or tokens instead of `Math.random()`.
