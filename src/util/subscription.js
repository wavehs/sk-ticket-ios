import { useState, useEffect } from 'react';
import * as jose from 'jose';
import publicKeyJwk from './publicKey.json';

export function useSubscription() {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [expirationDate, setExpirationDate] = useState(null);

  const checkSubscription = async () => {
    setLoading(true);
    const token = localStorage.getItem('subscription_key');

    if (!token) {
      setIsValid(false);
      setExpirationDate(null);
      setLoading(false);
      return;
    }

    try {
      // Import public key
      const publicKey = await jose.importJWK(publicKeyJwk, 'ES256');

      // Verify JWT
      const { payload } = await jose.jwtVerify(token, publicKey, {
        issuer: 'sk-ticket-keygen',
      });

      // Verification successful, also inherently checks the exp claim
      setIsValid(true);
      setExpirationDate(new Date(payload.exp * 1000));
    } catch (error) {
      // Token is invalid, expired, or malformed
      console.error("Subscription validation failed:", error.message);
      setIsValid(false);
      setExpirationDate(null);
    } finally {
      setLoading(false);
    }
  };

  const saveKey = async (token) => {
      try {
        const publicKey = await jose.importJWK(publicKeyJwk, 'ES256');
        await jose.jwtVerify(token, publicKey, {
            issuer: 'sk-ticket-keygen',
        });
        // If it passes verification, save it
        localStorage.setItem('subscription_key', token);
        await checkSubscription();
        return { success: true };
      } catch (e) {
          return { success: false, message: e.message };
      }
  };

  useEffect(() => {
    checkSubscription();
  }, []);

  return { isValid, loading, expirationDate, saveKey, checkSubscription };
}
