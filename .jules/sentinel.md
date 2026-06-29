## 2024-05-18 - [Weak PRNG for Security Identifier]
**Vulnerability:** The application used `Math.random()` to generate the `device_id` in `src/util/subscription.js`. This identifier is used to bind a subscription token to a specific device, providing a layer of security by preventing token sharing.
**Learning:** `Math.random()` is not cryptographically secure and produces predictable values. Using it to generate security-sensitive identifiers makes them susceptible to prediction and brute-forcing.
**Prevention:** Always use cryptographically secure pseudorandom number generators (CSPRNG), such as `crypto.getRandomValues()` in Web APIs or `crypto.randomBytes()` in Node.js, when generating security identifiers, tokens, or cryptographic keys.
