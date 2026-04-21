import React, { useState, useEffect } from 'react';
import * as jose from 'jose';
import './AdminPanel.css';

const STORAGE_KEY = 'admin_private_key';
const DAY_PRESETS = [7, 30, 90, 365, 999];

export const AdminPanel = () => {
    const [privateKeyPem, setPrivateKeyPem] = useState('');
    const [isKeyStored, setIsKeyStored] = useState(false);
    const [deviceId, setDeviceId] = useState('');
    const [days, setDays] = useState(30);
    const [generatedKey, setGeneratedKey] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);
    const [customDays, setCustomDays] = useState('');

    const handlePasteDevice = () => {
        navigator.clipboard.readText().then((text) => {
            setDeviceId(text.trim());
        });
    };

    const handlePastePrivateKey = () => {
        navigator.clipboard.readText().then((text) => {
            setPrivateKeyPem(text);
        });
    };

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setPrivateKeyPem(stored);
            setIsKeyStored(true);
        }
    }, []);

    const handleSavePrivateKey = async () => {
        setError('');
        const trimmed = privateKeyPem.trim();
        if (!trimmed.includes('BEGIN PRIVATE KEY')) {
            setError('Неверный формат. Вставьте содержимое файла private_key.pem');
            return;
        }
        try {
            // Validate the key by trying to import it
            await jose.importPKCS8(trimmed, 'ES256');
            localStorage.setItem(STORAGE_KEY, trimmed);
            setIsKeyStored(true);
        } catch (e) {
            setError('Не удалось прочитать ключ: ' + e.message);
        }
    };

    const handleGenerate = async () => {
        setError('');
        setGeneratedKey('');
        setCopied(false);

        const trimmedDevice = deviceId.trim().toUpperCase();
        if (!trimmedDevice) {
            setError('Введите код устройства клиента');
            return;
        }
        if (days < 1) {
            setError('Дни должны быть больше 0');
            return;
        }

        try {
            const privateKey = await jose.importPKCS8(privateKeyPem, 'ES256');
            const exp = Math.floor(Date.now() / 1000) + (days * 24 * 60 * 60);

            const jwt = await new jose.SignJWT({
                'urn:sk-ticket:subscription': true,
                device_id: trimmedDevice,
            })
                .setProtectedHeader({ alg: 'ES256' })
                .setIssuedAt()
                .setIssuer('sk-ticket-keygen')
                .setExpirationTime(exp)
                .sign(privateKey);

            setGeneratedKey(jwt);
        } catch (e) {
            setError('Ошибка генерации: ' + e.message);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedKey).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    const handleForgetKey = () => {
        localStorage.removeItem(STORAGE_KEY);
        setPrivateKeyPem('');
        setIsKeyStored(false);
        setGeneratedKey('');
    };

    // Step 1: Private key setup
    if (!isKeyStored) {
        return (
            <div className="admin-container">
                <div className="admin-panel">
                    <h2>🔐 Настройка</h2>
                    <div className="field">
                        <label>Вставьте содержимое private_key.pem:</label>
                        <textarea
                            value={privateKeyPem}
                            onChange={(e) => setPrivateKeyPem(e.target.value)}
                            placeholder="-----BEGIN PRIVATE KEY-----&#10;...&#10;-----END PRIVATE KEY-----"
                            rows={6}
                        />
                        <button className="btn-paste" onClick={handlePastePrivateKey} style={{
                            width: '100%', padding: '10px', marginTop: '8px',
                            border: '1px solid #444', borderRadius: '8px',
                            backgroundColor: '#2a2a2a', color: '#ccc', fontSize: '14px',
                            cursor: 'pointer'
                        }}>📋 Вставить из буфера</button>
                    </div>
                    {error && <div className="admin-error">{error}</div>}
                    <button className="btn-generate" onClick={handleSavePrivateKey}>
                        Сохранить ключ
                    </button>
                    <p className="admin-info">
                        Ключ сохранится только в памяти этого браузера.
                        Никуда не отправляется.
                    </p>
                </div>
            </div>
        );
    }

    // Step 2: Key generation
    return (
        <div className="admin-container">
            <div className="admin-panel">
                <h2>🔑 Генератор ключей</h2>

                <div className="field">
                    <label>Код устройства клиента:</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <input
                            type="text"
                            value={deviceId}
                            onChange={(e) => setDeviceId(e.target.value)}
                            placeholder="A7B9-X2K1"
                            maxLength={9}
                            style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '18px', textAlign: 'center', flex: 1 }}
                        />
                        <button onClick={handlePasteDevice} style={{
                            border: '1px solid #444', borderRadius: '8px',
                            backgroundColor: '#2a2a2a', color: '#ccc', fontSize: '18px',
                            cursor: 'pointer', padding: '0 14px', whiteSpace: 'nowrap'
                        }}>📋</button>
                    </div>
                </div>

                <div className="field">
                    <label>Срок действия (дней):</label>
                    <div className="days-presets">
                        {DAY_PRESETS.map(d => (
                            <button
                                key={d}
                                className={days === d && customDays === '' ? 'active' : ''}
                                onClick={() => { setDays(d); setCustomDays(''); }}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                    <input
                        type="number"
                        value={customDays}
                        onChange={(e) => { setCustomDays(e.target.value); if (e.target.value) setDays(Number(e.target.value)); }}
                        placeholder="Или введите своё количество"
                        min={1}
                        style={{ marginTop: '8px' }}
                    />
                </div>

                {error && <div className="admin-error">{error}</div>}

                <button className="btn-generate" onClick={handleGenerate}>
                    Сгенерировать
                </button>

                {generatedKey && (
                    <div className="admin-result">
                        <p>✅ Ключ для {deviceId.toUpperCase()} на {days} дней:</p>
                        <div className="key-output">{generatedKey}</div>
                        <button className="btn-copy" onClick={handleCopy}>
                            {copied ? '✓ Скопировано' : '📋 Копировать ключ'}
                        </button>
                    </div>
                )}

                <button className="btn-danger" onClick={handleForgetKey}>
                    Забыть приватный ключ
                </button>
            </div>
        </div>
    );
};
