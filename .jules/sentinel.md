## 2024-06-16 - Weak Device ID Generation
**Vulnerability:** The device ID (`device_id`) used to bind the client subscription token was being generated using `Math.random()`, which is not a cryptographically secure pseudo-random number generator (CSPRNG).
**Learning:** `Math.random()` was chosen likely for simplicity or convenience, overlooking the fact that a predictable device ID might make it easier to forge or predict valid binding targets.
**Prevention:** Always use `globalThis.crypto.getRandomValues()` or an equivalent CSPRNG when generating tokens, identifiers, or secrets that have security implications.
