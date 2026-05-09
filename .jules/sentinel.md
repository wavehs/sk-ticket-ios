## 2024-05-09 - [Fix Weak Random Number Generation for Device ID]
**Vulnerability:** Weak PRNG (`Math.random()`) was being used to generate device IDs for binding subscription tokens.
**Learning:** `Math.random()` is not cryptographically secure and shouldn't be used for security-critical identifiers such as device IDs or tokens.
**Prevention:** Use CSPRNG (`self.crypto.getRandomValues`) for all identifiers and randomness tied to authentication or security functions.
