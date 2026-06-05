## 2025-02-14 - Fix weak random number generation for device ID
**Vulnerability:** Weak pseudo-random number generator (`Math.random()`) used for generating secure device identifiers, making them predictable and susceptible to brute forcing.
**Learning:** `Math.random()` should never be used where a strong or secure random sequence is required, such as keys, tokens, and identifiers used in security boundaries like token signing and verification.
**Prevention:** Use a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) like `crypto.getRandomValues()` or a proven library that relies on it when security is concerned.
