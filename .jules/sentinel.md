## 2025-02-15 - [MEDIUM] Insecure Device ID Randomness
**Vulnerability:** The `getOrCreateDeviceId` function used the non-cryptographically secure `Math.random()` to generate device IDs for subscription verification.
**Learning:** `Math.random()` numbers can be predicted, making it possible for attackers to guess or brute-force valid device IDs if the pool isn't sufficiently large.
**Prevention:** Use `globalThis.crypto.getRandomValues()` (CSPRNG) in browser/React Native contexts for security-critical random generation tasks, and provide polyfills in test suites to prevent breaking `jest-environment-jsdom`.
