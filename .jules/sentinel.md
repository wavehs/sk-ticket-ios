## 2025-02-27 - Replace weak Math.random() with CSPRNG
**Vulnerability:** The device ID, which binds the subscription to a specific device, was generated using `Math.random()`. This is not cryptographically secure and could theoretically allow predicting device IDs.
**Learning:** Security-sensitive tokens and identifiers must be generated using Cryptographically Secure Pseudo-Random Number Generators (CSPRNG), such as `self.crypto.getRandomValues()`.
**Prevention:** Always use `self.crypto.getRandomValues()` or an equivalent secure random API rather than `Math.random()` when generating IDs or tokens used for security bindings or authentication.
