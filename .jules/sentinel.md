## 2025-04-30 - Fix weak random number generation
**Vulnerability:** Weak PRNG for device IDs used in token binding
**Learning:** `Math.random()` was being used to generate device IDs which are used for cryptographic binding of subscription tokens. `Math.random()` is not cryptographically secure and its outputs can be predicted, making token bindings susceptible to cloning or forgery.
**Prevention:** Always use a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) like `self.crypto.getRandomValues` or Node's `crypto` module when generating identifiers used for security purposes.
