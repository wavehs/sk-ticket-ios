## 2024-05-15 - [Medium] Fix weak random number generation
**Vulnerability:** Weak random number generation using `Math.random()` to generate security-sensitive device IDs.
**Learning:** Math.random() is predictable and unsuitable for security boundaries.
**Prevention:** Use cryptographically secure pseudo-random number generator (CSPRNG) like `crypto.getRandomValues()` for security-sensitive operations.