## 2024-05-28 - [Weak Random Number Generation in Device ID]
**Vulnerability:** Weak PRNG `Math.random()` used for generating subscription device IDs in `src/util/subscription.js`.
**Learning:** Math.random() is predictable and unsuitable for identifiers used in access/subscription logic.
**Prevention:** Always use Web Crypto API (`globalThis.crypto.getRandomValues`) for identifiers or secrets where predictability could be exploited.
