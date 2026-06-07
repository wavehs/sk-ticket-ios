## 2024-05-24 - [Device ID Generation]
**Vulnerability:** Weak random number generation using Math.random() for device IDs.
**Learning:** Math.random() is predictable and shouldn't be used for IDs used in cryptographic contexts like JWT claims binding.
**Prevention:** Use globalThis.crypto.getRandomValues() for CSPRNG instead.
