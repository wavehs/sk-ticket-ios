
## 2024-05-24 - Replace weak PRNG Math.random() with CSPRNG
**Vulnerability:** Weak random number generation using `Math.random()` for a security identifier (device ID) which binds subscription keys to a user's session.
**Learning:** `Math.random()` is not cryptographically secure and the generated values can be predictable. A determined attacker might be able to guess device identifiers or collide them, bypassing or transferring subscriptions improperly.
**Prevention:** Always use a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG), such as `crypto.getRandomValues()` in the browser environment, when generating sensitive identifiers, secrets, or tokens.
