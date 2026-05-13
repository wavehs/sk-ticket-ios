## Sentinel Journal
## 2026-05-13 - Secure Random Number Generation
**Vulnerability:** Weak random number generation using Math.random() to create device IDs, making them predictable and vulnerable to guessing or brute-force attacks.
**Learning:** Math.random() should not be used for security-sensitive operations such as generating unique device identifiers.
**Prevention:** Use the Web Crypto API, specifically self.crypto.getRandomValues(), to generate cryptographically secure random values for device identifiers.
