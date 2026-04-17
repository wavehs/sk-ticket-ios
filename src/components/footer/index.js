import * as React from "react";
import "./style.css";

export const Footer = () => (
  <div className="footer-container">
    <div className="footer-inner">
      <button className="footer-add-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="6" x2="12" y2="18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="6" y1="12" x2="18" y2="12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="footer-input-wrapper">
        <span className="footer-input-text">Текстовое сообщение • SMS</span>
        <button className="footer-mic-btn">
          <svg width="17" height="24" viewBox="0 0 17 24" fill="none">
            <rect x="4" y="1" width="9" height="14" rx="4.5" stroke="#636366" strokeWidth="1.5" />
            <path d="M1 12c0 4.5 3 7.5 7.5 7.5s7.5-3 7.5-7.5" stroke="#636366" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8.5" y1="19.5" x2="8.5" y2="23" stroke="#636366" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);
