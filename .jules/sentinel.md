## 2024-06-02 - Replace Math.random() with CSPRNG for Device ID Generation
**Vulnerability:** The application used `Math.random()` to generate the `device_id` which binds JWT subscriptions. `Math.random()` is not cryptographically secure, leading to predictable IDs.
**Learning:** Even in purely client-side React apps, any identifier used for security binding (like a subscription token) must be unpredictable.
**Prevention:** Use `globalThis.crypto.getRandomValues()` instead of `Math.random()` when generating identifiers meant to be unique and unpredictable for security mechanisms.
