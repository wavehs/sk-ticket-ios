## 2024-06-21 - Fix weak random number generation for device IDs
**Vulnerability:** The application used `Math.random()` to generate an 8-character `deviceId` in `src/util/subscription.js`. These predictable device IDs were used in the validation of subscription JWTs.
**Learning:** Security-sensitive random numbers (like identifiers, tokens, and secrets) must not use predictable pseudo-random number generators like `Math.random()`.
**Prevention:** Use cryptographically secure pseudorandom number generators (CSPRNG), such as `crypto.getRandomValues()` in the browser, to generate secure randomness.
