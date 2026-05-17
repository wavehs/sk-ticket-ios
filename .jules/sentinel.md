## 2024-05-17 - Fix Insecure Randomness in Device ID
**Vulnerability:** Used `Math.random()` to generate `deviceId` in `src/util/subscription.js`, which binds the JWT token to the device.
**Learning:** `Math.random()` is not cryptographically secure and the predictability can potentially allow device identifiers to be guessed. Security-sensitive strings must be generated using a CSPRNG.
**Prevention:** Always use `globalThis.crypto.getRandomValues()` or a reliable cryptographically secure library for generating identifiers used in security contexts (like JWT bindings).
