## 2026-06-28 - [MEDIUM] Fix weak random number generation for device ID
**Vulnerability:** The `getOrCreateDeviceId` function used the non-cryptographically secure `Math.random()` to generate the `deviceId`, which is bound to the JWT subscription token.
**Learning:** `Math.random()` is not suitable for generating secure identifiers, as its output can be predictable. A Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) must be used.
**Prevention:** Always use `globalThis.crypto.getRandomValues()` when generating sensitive IDs, tokens, or cryptographic nonces.
