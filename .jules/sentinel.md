## 2024-10-24 - Weak random generation for Device IDs
**Vulnerability:** Weak Math.random() usage for Device IDs
**Learning:** `Math.random()` generates predictable values which might allow for device ID guessing.
**Prevention:** Always use `globalThis.crypto.getRandomValues()` for sensitive identifiers.
