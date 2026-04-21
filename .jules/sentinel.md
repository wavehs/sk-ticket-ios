## 2024-04-21 - Weak PRNG in Device ID Generation
**Vulnerability:** The `device_id` used to bind subscription JWTs to a specific client device was being generated using `Math.random()`.
**Learning:** `Math.random()` is not cryptographically secure and the generated output could potentially be predicted. Given that the `device_id` acts as a crucial security identifier during JWT verification, it must be generated securely to prevent an attacker from bypassing the device binding check.
**Prevention:** Always use `window.crypto.getRandomValues()` or a similarly secure random number generator when generating security identifiers or tokens in the browser.
