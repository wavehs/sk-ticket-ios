## 2025-02-14 - Fix weak random number generation
**Vulnerability:** Found `Math.random()` being used to generate device IDs for JWT subscription tokens in `src/util/subscription.js`.
**Learning:** `Math.random()` is not cryptographically secure and could potentially allow predictability in generated device IDs, enabling token spoofing/hijacking across devices.
**Prevention:** Always use a CSPRNG like `globalThis.crypto.getRandomValues()` for generating security tokens, device IDs, or keys.
