## 2024-05-15 - [Fix weak random number generation]
**Vulnerability:** Weak random number generation using `Math.random()` in `getOrCreateDeviceId` inside `src/util/subscription.js` to create device IDs used in cryptographically binding JWT keys.
**Learning:** `Math.random()` is not a cryptographically secure pseudo-random number generator (CSPRNG), making device IDs potentially predictable and opening up possibilities for generating unauthorized subscriptions.
**Prevention:** Use `self.crypto.getRandomValues()` (CSPRNG) when generating identifiers with security implications.
