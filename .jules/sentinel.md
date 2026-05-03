## 2024-05-03 - Weak Random Number Generation in device_id
**Vulnerability:** `Math.random()` was used to generate the 8-character `device_id` in `src/util/subscription.js`.
**Learning:** `Math.random()` is not cryptographically secure, and using it for a `device_id` that bounds a signed subscription token weakens the overall security of the licensing mechanism. This makes device IDs predictable.
**Prevention:** Always use `self.crypto.getRandomValues` (CSPRNG) for generating IDs, tokens, or any value used for security boundaries. In testing environments (jsdom), a polyfill for `self.crypto.getRandomValues` using `crypto.randomFillSync` might be necessary.
