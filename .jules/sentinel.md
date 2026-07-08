## 2024-07-08 - Fix Insecure Randomness in Device ID Generation
**Vulnerability:** Weak random number generation for security purposes. The `getOrCreateDeviceId` function used the non-cryptographically secure `Math.random()` to generate the unique device ID used for verifying client-side subscriptions via ECDSA-signed JWTs.
**Learning:** Using `Math.random()` to generate identifiers used in security checks or as pseudo-secrets (like a device ID bound to a subscription token) makes them predictable and vulnerable to guessing attacks.
**Prevention:** Always use a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG), such as `globalThis.crypto.getRandomValues()`, for any values that are part of a security control or need to be unguessable.
