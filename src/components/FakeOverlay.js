import React from 'react';
import './FakeOverlay.css';

const FakeOverlay = () => {
    return (
        <div className="fake-overlay">
            <div className="fake-pattern"></div>
            <div className="fake-overlay-card">
                <div className="fake-overlay-title">КУПИТЬ ПОДПИСКУ</div>
                <div className="fake-overlay-contact">
                    <span className="fake-overlay-label">tg: </span>
                    <a
                        href="https://t.me/dozaseryoznaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fake-overlay-link"
                    >
                        @dozaseryoznaya
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FakeOverlay;
