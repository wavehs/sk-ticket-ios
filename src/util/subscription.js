import { useState, useEffect } from 'react';
import * as jose from 'jose';
import publicKeyJwk from './publicKey.json';

export function getOrCreateDeviceId() {
  let deviceId = localStorage.getItem('device_id');
  if (!deviceId) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const randomValues = new Uint32Array(8);
    globalThis.crypto.getRandomValues(randomValues);

    deviceId = '';
    for(let i=0; i<4; i++) deviceId += chars.charAt(randomValues[i] % chars.length);
    deviceId += '-';
    for(let i=0; i<4; i++) deviceId += chars.charAt(randomValues[i + 4] % chars.length);
    localStorage.setItem('device_id', deviceId);
  }
  return deviceId;
}

export function useSubscription() {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [expirationDate, setExpirationDate] = useState(null);
  const [deviceId] = useState(getOrCreateDeviceId());

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

      if (payload.device_id !== deviceId) {
        throw new Error('Token bound to another device');
      }

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
        const { payload } = await jose.jwtVerify(token, publicKey, {
            issuer: 'sk-ticket-keygen',
        });
        
        if (payload.device_id !== deviceId) {
            throw new Error('Token bound to another device');
        }

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

  return { isValid, loading, expirationDate, saveKey, checkSubscription, deviceId };
}
