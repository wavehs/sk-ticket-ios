## 2026-05-27 - [MEDIUM] Insecure Device ID Generation
**Vulnerability:** The device ID generation in `getOrCreateDeviceId` (`src/util/subscription.js`) used the weak pseudo-random number generator `Math.random()`.
**Learning:** `Math.random()` should never be used for security-sensitive purposes like generating unique device identifiers, as its outputs are predictable.
**Prevention:** Use a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) like `crypto.getRandomValues()` (in the browser) for any ID generation that requires randomness and unpredictability.
