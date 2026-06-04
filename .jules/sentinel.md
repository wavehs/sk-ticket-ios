## 2024-06-04 - Insecure RNG using Math.random for Device IDs
**Vulnerability:** `getOrCreateDeviceId` was generating device IDs using `Math.random()`, which is a weak pseudo-random number generator (PRNG) and cryptographically insecure.
**Learning:** When generating IDs that might be tied to authentication, subscriptions, or sensitive data, it is crucial to use a cryptographically secure RNG to prevent predictability and brute-force guessing of the generated IDs.
**Prevention:** Always default to `globalThis.crypto.getRandomValues()` instead of `Math.random()` for any non-trivial random generation, and ensure testing environments are polyfilled as needed (e.g., using `crypto.randomFillSync` in JSDOM).
