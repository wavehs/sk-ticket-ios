## 2024-05-30 - [Weak RNG for Security Purposes]
**Vulnerability:** Weak random number generator (`Math.random()`) used for generating `deviceId` in `src/util/subscription.js`.
**Learning:** `Math.random()` is not cryptographically secure, and predictable device IDs could potentially lead to bypassing restrictions if someone manages to guess the generated `deviceId` and reuse keys.
**Prevention:** Use `crypto.getRandomValues()` to generate cryptographically secure random values instead of `Math.random()` for any security-related IDs or tokens.
