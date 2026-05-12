## 2024-05-12 - [Weak Random Number Generation in Device ID]
**Vulnerability:** The device ID was generated using `Math.random()`, making it predictable.
**Learning:** `Math.random()` is not cryptographically secure and should not be used to generate tokens, IDs, or secrets that might rely on unpredictability for security.
**Prevention:** Use `crypto.getRandomValues()` (or `self.crypto.getRandomValues()` in modern browsers) for generating secure random tokens or IDs.
