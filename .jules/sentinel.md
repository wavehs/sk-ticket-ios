## 2024-05-20 - Insecure Randomness in Device ID Generation
**Vulnerability:** The application used `Math.random()` to generate an 8-character device ID that was used to bind JWT subscription tokens. `Math.random()` is not cryptographically secure and could allow an attacker to predict generated device IDs, potentially assisting in token theft or cloning.
**Learning:** Even identifiers that are not explicitly passwords or cryptographic keys must be generated using a CSPRNG if they are relied upon for access control or token binding logic.
**Prevention:** Always use `crypto.getRandomValues()` or `crypto.randomUUID()` when generating random identifiers used in security contexts.
