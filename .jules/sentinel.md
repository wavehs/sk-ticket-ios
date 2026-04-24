
## 2024-05-24 - [Fix Weak RNG and JWT Algorithm Confusion in Subscription Module]
**Vulnerability:** Weak RNG was used to generate deviceIds via `Math.random()`, leading to potentially predictable identifiers and weak token binding. Additionally, the `jose.jwtVerify()` call was missing the `algorithms` array, potentially allowing an attacker to submit a maliciously signed token if the library falls back to an unsafe algorithm.
**Learning:** `Math.random()` should never be used for security-critical identifiers. Token verification must always explicitly state accepted algorithms to prevent algorithm confusion attacks where symmetric keys might be parsed as asymmetric algorithms or vice versa.
**Prevention:** Use `window.crypto.getRandomValues()` for generating random identifiers on the client side. Explicitly configure cryptographic libraries like `jose` to only accept intended algorithms (e.g., `algorithms: ['ES256']`).
