## 2024-05-21 - Weak random generation for security purposes
**Vulnerability:** `getOrCreateDeviceId` in `src/util/subscription.js` uses `Math.random` to generate device codes which are then stored in local storage and encoded into a JSON Web Token used for access.
**Learning:** `Math.random` is predictable and does not use a cryptographically secure pseudorandom number generator (CSPRNG), making it susceptible to tampering. The security check for device binding `if (payload.device_id !== deviceId)` relies on this value.
**Prevention:** `crypto.getRandomValues()` should be used instead of `Math.random()` to construct any random values related to security logic, IDs, or tokens.
