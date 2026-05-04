## 2024-05-15 - [CRITICAL] Replace Math.random with CSPRNG for security tokens
**Vulnerability:** Weak random number generation using `Math.random()` to generate `deviceId` which acts as a security token bind.
**Learning:** `Math.random()` is predictable and not cryptographically secure. Relying on it for generating device identifiers that are used to validate JWT subscriptions can allow spoofing or bypassing token validation.
**Prevention:** Always use `self.crypto.getRandomValues()` (or equivalent CSPRNG) when generating tokens, identifiers, or secrets used for security boundaries.
