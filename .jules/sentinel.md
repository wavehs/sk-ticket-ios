## 2024-05-01 - Replace Math.random with Web Crypto API for secure IDs
**Vulnerability:** Weak random number generation using `Math.random()` to construct a `device_id` which acts as a security binding identifier in JSON Web Tokens (JWTs).
**Learning:** `Math.random()` provides predictable pseudorandom output which could lead to ID collisions or attacks trying to predict the ID. Although the original script in `getOrCreateDeviceId()` is small, utilizing a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) ensures true randomness for security tokens.
**Prevention:** Avoid `Math.random()` when security or uniqueness is paramount. Use `self.crypto.getRandomValues()` instead. Additionally, remember to mock it during `jsdom` testing (e.g., using `crypto.randomFillSync`).
