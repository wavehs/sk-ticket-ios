
## 2025-02-18 - [Fix Weak Random Number Generation for Device ID]
**Vulnerability:** The application used `Math.random()` to generate device IDs for binding JWT subscription tokens.
**Learning:** `Math.random()` is cryptographically insecure and predictable, which could allow attackers to predict device IDs and bypass or spoof subscription bindings. Even if used for non-sensitive parts like user IDs, predictable numbers can be dangerous if they are used as part of auth checks.
**Prevention:** Always use a Cryptographically Secure Pseudorandom Number Generator (CSPRNG) like `globalThis.crypto.getRandomValues()` for any values involved in authentication, authorization, or security tokens.
