## 2024-05-24 - Replace Math.random with globalThis.crypto.getRandomValues
**Vulnerability:** Weak random number generation using Math.random() for device ID generation.
**Learning:** Math.random() is predictable and not suitable for security purposes. Using it could allow an attacker to guess or predict the device ID.
**Prevention:** Always use cryptographically secure pseudo-random number generators (CSPRNG) like crypto.getRandomValues() for generating random values used in security contexts.
