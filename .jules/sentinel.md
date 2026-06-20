## 2024-06-20 - Fix weak random number generation
**Vulnerability:** Weak random number generation (`Math.random()`) used for device IDs.
**Learning:** `Math.random()` is not cryptographically secure and should not be used for security-sensitive operations like token binding.
**Prevention:** Always use `crypto.getRandomValues()` or `crypto.subtle` for generating random values used in security contexts.
