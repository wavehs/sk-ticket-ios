## 2024-11-23 - Use CSPRNG for security-bound identifiers
**Vulnerability:** The device ID, which is used to bind JWT tokens to specific devices for subscription verification, was being generated using the cryptographically weak `Math.random()`. This could potentially allow an attacker to predict device IDs.
**Learning:** Security-sensitive identifiers that act as part of an authentication or verification flow (like device bindings for JWTs) must use a cryptographically secure pseudo-random number generator (CSPRNG).
**Prevention:** Always use `globalThis.crypto.getRandomValues()` or `crypto.randomBytes()` (in Node.js) instead of `Math.random()` when generating identifiers or tokens that have security implications.
