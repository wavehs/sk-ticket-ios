## 2025-02-18 - [Weak Random Number Generation for Device ID]
**Vulnerability:** Weak random number generation using Math.random() for device ID.
**Learning:** Math.random() is predictable and cryptographically insecure, making it unsuitable for generating security tokens or identifiers used in authentication.
**Prevention:** Use cryptographically secure pseudo-random number generators (CSPRNG) like `crypto.getRandomValues()` for generating sensitive random values.
