## 2024-05-10 - Replace weak random number generation with cryptographically secure CSPRNG

**Vulnerability:** Weak random number generation (`Math.random()`) used for a security-sensitive `device_id` in subscription token verification.
**Learning:** `Math.random()` does not provide cryptographically secure random numbers, and is not suitable for generating tokens, passwords, or IDs that enforce security. In this codebase, the subscription uses the `device_id` to bind JWTs to a specific device. Since `Math.random` is predictable, an attacker could predict `device_id` generation or collision and compromise the binding of subscription tokens.
**Prevention:** Use the Web Crypto API's `self.crypto.getRandomValues()` to generate cryptographically secure pseudorandom numbers (CSPRNG) when security mechanisms rely on random identifiers.
