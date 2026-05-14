## 2024-05-14 - Fix weak random number generation for device IDs
**Vulnerability:** The application used `Math.random()` to generate the `device_id` string in `src/util/subscription.js`.
**Learning:** `Math.random()` is not a cryptographically secure pseudo-random number generator (CSPRNG). Using it for security-sensitive identifiers makes them predictable and vulnerable to attacks, such as generating matching JWT tokens.
**Prevention:** Always use a CSPRNG, like `crypto.getRandomValues()` in the browser or the `crypto` module in Node.js, when generating secure identifiers, keys, or tokens.
