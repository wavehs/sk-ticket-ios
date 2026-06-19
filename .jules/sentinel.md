## 2024-06-19 - Insecure Randomness in Device ID Generation
**Vulnerability:** The application used `Math.random()` to generate the `device_id` which acts as a security boundary for token binding. `Math.random()` is not cryptographically secure, meaning its outputs could theoretically be predicted, allowing an attacker to guess a device ID and bypass the token binding validation.
**Learning:** Even client-side identifiers require cryptographically secure random number generation (CSPRNG) if they are used as part of a security control (like binding a JWT to a specific device).
**Prevention:** Always use `globalThis.crypto.getRandomValues()` (or equivalent CSPRNG) when generating any value that serves as an identifier, token, or secret used in security contexts.
