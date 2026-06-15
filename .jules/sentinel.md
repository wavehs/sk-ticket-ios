## 2024-05-24 - Weak RNG in deviceId Generation
**Vulnerability:** Math.random() is used to generate the device_id, which acts as a security identifier bound to the JWT subscription. Math.random() is predictable.
**Learning:** Used Math.random() instead of cryptographically secure random number generator, probably for convenience or lack of awareness.
**Prevention:** Always use globalThis.crypto.getRandomValues() when generating security-sensitive IDs.
