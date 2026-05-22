## 2024-05-24 - [MEDIUM] Fix weak random number generation for device ID
**Vulnerability:** The device ID generator for subscription tracking used `Math.random()`, which is a weak pseudo-random number generator that is not cryptographically secure.
**Learning:** Security tokens and identifying credentials that tie to authorization/licensing (like the `device_id` included in JWT claims) need to be unpredictable to prevent brute-force attacks or collision prediction. `Math.random()` provides predictable outputs.
**Prevention:** Always use `globalThis.crypto.getRandomValues()` (CSPRNG) when generating any value that has security implications (IDs, nonces, tokens, passwords).
