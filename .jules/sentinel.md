## 2026-05-31 - Predictable Device ID via Weak RNG
**Vulnerability:** The device ID, which is used as a security binding claim in subscription JWTs, was generated using `Math.random()`. This makes the generated device IDs predictable and compromises the token-to-device binding security.
**Learning:** For identifiers involved in security contexts (like JWT claims), relying on non-cryptographic PRNGs (like `Math.random()`) is insecure.
**Prevention:** Always use a Cryptographically Secure Pseudorandom Number Generator (CSPRNG), such as `globalThis.crypto.getRandomValues()`, when generating security-critical identifiers or tokens.
