## 2024-06-26 - Insecure Randomness in `device_id` Generation
**Vulnerability:** The device ID string in `src/util/subscription.js` was generated using `Math.random()`, which is a non-cryptographically secure pseudorandom number generator (CSPRNG).
**Learning:** `Math.random()` provides statistical randomness but not cryptographic security. Although the `device_id` here doesn't act as a secure credential, predictable random values can still enable brute-forcing or predicting future generated values across the system if they rely on the same underlying PRNG state.
**Prevention:** For any randomly generated strings or IDs involved in logic or identifiers, default to using a CSPRNG like `globalThis.crypto.getRandomValues()` instead of `Math.random()`.
