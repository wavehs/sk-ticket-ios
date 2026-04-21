import React, { useState } from 'react';
import './SubscriptionModal.css';

export const SubscriptionModal = ({ onClose, subscription }) => {
    const { isValid, expirationDate, saveKey, deviceId } = subscription;
    const [keyInput, setKeyInput] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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
                    <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', letterSpacing: '2px', color: '#fff' }}>{deviceId}</p>
                </div>

                <div className="input-group">
                    <label>Enter new key:</label>
                    <textarea
                        value={keyInput}
                        onChange={(e) => setKeyInput(e.target.value)}
                        placeholder="Paste your key here..."
                        rows={4}
                    />
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