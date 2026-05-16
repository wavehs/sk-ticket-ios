## 2024-03-24 - Weak PRNG used for Security-Critical Identifiers
**Vulnerability:** The application used `Math.random()` to generate the `device_id` which is a critical piece of the subscription verification mechanism (used to tie a JWT specifically to one device).
**Learning:** `Math.random()` is not a cryptographically secure pseudo-random number generator (CSPRNG). Its outputs are predictable, which could allow an attacker to guess a `device_id` and potentially reuse subscriptions or forge tokens if they gain access to other pieces of the system.
**Prevention:** Always use `globalThis.crypto.getRandomValues()` (or `crypto.randomFillSync` in Node.js) for generating any values that are used for security, authentication, authorization, or session management.
