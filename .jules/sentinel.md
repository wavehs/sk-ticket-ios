## 2025-07-05 - Weak Random Number Generation in Device ID
**Vulnerability:** The application used `Math.random()` to generate the `device_id` string. `Math.random()` is not a cryptographically secure pseudo-random number generator (CSPRNG), making the IDs predictable.
**Learning:** For identifiers used as a form of weak binding or security context (even if not highly sensitive), `Math.random()` should be avoided due to predictability.
**Prevention:** Always use `globalThis.crypto.getRandomValues()` or a robust CSPRNG library when generating unpredictable strings like IDs, tokens, or hashes.
