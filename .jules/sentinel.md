## 2024-05-28 - [MEDIUM] Fix weak random number generation for device ID
**Vulnerability:** Found `Math.random()` being used to generate `deviceId` in `src/util/subscription.js`, which is an insecure method for generating random numbers and could lead to predictable IDs.
**Learning:** `Math.random()` is not cryptographically secure and should not be used for anything security-sensitive, like generating IDs or tokens.
**Prevention:** Use `globalThis.crypto.getRandomValues()` to generate cryptographically secure random values for any IDs, tokens, or security-sensitive numbers.
