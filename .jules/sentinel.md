## 2024-04-29 - [CRITICAL] Replace Math.random() with CSPRNG for sensitive device IDs
**Vulnerability:** The application used `Math.random()` to generate the `device_id` in the client-side subscription verification system, making the token predictable.
**Learning:** `Math.random()` is not cryptographically secure. Relying on it to bind security-sensitive JWT subscription keys directly compromises the integrity of the subscription check, as an attacker could brute-force or guess the generated ID.
**Prevention:** Always use a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) like `crypto.getRandomValues()` or node's `crypto.randomFillSync()` for generating sensitive keys, tokens, or identifiers.
