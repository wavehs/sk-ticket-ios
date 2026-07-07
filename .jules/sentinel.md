## 2024-07-07 - [Weak Random Number Generation for Device ID]
**Vulnerability:** Weak random number generation using `Math.random()` to generate device IDs.
**Learning:** `Math.random()` is not cryptographically secure and predictable, which could allow malicious users to guess device IDs.
**Prevention:** Use `globalThis.crypto.getRandomValues()` to generate cryptographically secure random values.
