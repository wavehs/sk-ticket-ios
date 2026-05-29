## 2024-05-29 - Weak Random Number Generation
**Vulnerability:** Found `Math.random()` used in `getOrCreateDeviceId` within `src/util/subscription.js` to generate device IDs for subscriptions. `Math.random()` is not cryptographically secure and could theoretically allow predictability in generated device IDs.
**Learning:** `Math.random()` should be avoided for any purpose vaguely related to security or unique identifier generation tied to access control.
**Prevention:** Use `window.crypto.getRandomValues()` (or `globalThis.crypto.getRandomValues()`) instead. For testing environments like JSDOM without a native crypto implementation, polyfill using the node `crypto` module (e.g., `crypto.randomFillSync`).
