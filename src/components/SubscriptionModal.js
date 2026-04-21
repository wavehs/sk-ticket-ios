import React, { useState } from 'react';
import './SubscriptionModal.css';

export const SubscriptionModal = ({ onClose, subscription }) => {
    const { isValid, expirationDate, saveKey, deviceId } = subscription;
    const [keyInput, setKeyInput] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(deviceId).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handlePaste = () => {
        navigator.clipboard.readText().then((text) => {
            setKeyInput(text);
        });
    };

    const handleSave = async () => {
        setError('');
        setSuccess('');
        if (!keyInput.trim()) {
            setError('Please enter a key.');
            return;
        }

        const result = await saveKey(keyInput.trim());
        if (result.success) {
            setSuccess('Key saved and subscription active!');
            setKeyInput('');
            setTimeout(() => {
                onClose();
            }, 1500);
        } else {
            setError('Invalid or expired key.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Subscription Status</h2>
                {isValid && expirationDate ? (
                    <div className="status active">
                        <p>Status: Active</p>
                        <p>Valid until: {expirationDate.toLocaleDateString()}</p>
                    </div>
                ) : (
                    <div className="status inactive">
                        <p>Status: Inactive</p>
                    </div>
                )}

                <div className="device-info" style={{ marginBottom: '20px', textAlign: 'center', backgroundColor: '#333', padding: '10px', borderRadius: '8px' }}>
                    <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#ccc' }}>Your Device Code:</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', letterSpacing: '2px', color: '#fff' }}>{deviceId}</p>
                        <button onClick={handleCopy} style={{
                            background: 'none', border: '1px solid #666', borderRadius: '6px',
                            color: copied ? '#51cf66' : '#ccc', cursor: 'pointer', padding: '4px 8px',
                            fontSize: '14px', transition: 'color 0.2s'
                        }}>{copied ? '✓' : '⧉'}</button>
                    </div>
                </div>

                <div className="input-group">
                    <label>Enter new key:</label>
                    <textarea
                        value={keyInput}
                        onChange={(e) => setKeyInput(e.target.value)}
                        placeholder="Paste your key here..."
                        rows={4}
                    />
                    <button onClick={handlePaste} style={{
                        width: '100%', padding: '10px', marginTop: '8px',
                        border: '1px solid #555', borderRadius: '6px',
                        backgroundColor: '#333', color: '#fff', fontSize: '14px',
                        cursor: 'pointer'
                    }}>📋 Вставить из буфера</button>
                </div>

                {error && <div className="error-msg">{error}</div>}
                {success && <div className="success-msg">{success}</div>}

                <div className="modal-actions">
                    <button onClick={handleSave} className="btn-save">Activate</button>
                    <button onClick={onClose} className="btn-close">Close</button>
                </div>
            </div>
        </div>
    );
};