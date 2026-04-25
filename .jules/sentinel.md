## 2024-04-25 - Weak Random Number Generation for Security Identifier
**Vulnerability:** The application used `Math.random()` to generate the `device_id` which acts as a security binding identifier for the client-side subscription verification system.
**Learning:** `Math.random()` is predictable and not cryptographically secure, which could theoretically allow an attacker to predict generated identifiers or reduce the entropy of the security bindings. Using it for any security-related token or identifier is a poor practice.
**Prevention:** Always use `window.crypto.getRandomValues()` or a cryptographically secure pseudo-random number generator (CSPRNG) when generating identifiers that have a security implication.
