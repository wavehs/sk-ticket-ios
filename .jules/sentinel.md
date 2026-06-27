## 2024-06-27 - Weak Random Number Generation in Device ID
**Vulnerability:** The application used `Math.random()` to generate an 8-character device ID, which could lead to predictable device IDs.
**Learning:** `Math.random()` is not a cryptographically secure pseudo-random number generator (CSPRNG), making the generated identifiers predictable if the internal state of the PRNG is deduced.
**Prevention:** Use the `crypto.getRandomValues()` Web API (or the equivalent Node.js `crypto.webcrypto.getRandomValues()`) for generating any random values used for identifiers or security purposes to ensure they are unpredictable.
