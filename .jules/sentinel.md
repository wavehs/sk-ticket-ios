## 2025-02-21 - [Weak Device ID Generation]
**Vulnerability:** The device ID was generated using Math.random(), which is not cryptographically secure and can lead to predictable IDs.
**Learning:** Math.random() should not be used for generating IDs that have security implications, such as device IDs bound to a JWT.
**Prevention:** Always use a CSPRNG (e.g., globalThis.crypto.getRandomValues) for generating secure random values.
