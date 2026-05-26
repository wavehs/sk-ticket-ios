## 2024-05-18 - [Security Enhancement] Replace Math.random with CSPRNG
**Vulnerability:** Weak PRNG `Math.random()` was used to generate `device_id`, making the ID predictable and potentially enabling token impersonation or device spoofing since subscriptions are tied to it.
**Learning:** Even low-stakes identifiers should use a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) if they act as a security constraint (e.g. binding JWT tokens to devices). Tests in jsdom environments might need specific mocks for `crypto.getRandomValues()`.
**Prevention:** Always use `crypto.getRandomValues()` or `crypto.randomUUID()` in the browser for generating tokens, IDs, or keys. Ensure testing environments polyfill these Web Crypto APIs if not natively available.
