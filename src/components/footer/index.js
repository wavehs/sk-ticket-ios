import * as React from "react";
import "./style.css";

export const Footer = () => (
  <div className="footer-container">
    <div className="footer-inner">
      <button className="footer-add-btn">
        <span className="footer-plus">+</span>
      </button>
      <div className="footer-input-wrapper">
        <span className="footer-input-text">Текстовое сообщение • SMS</span>
      </div>
      <button className="footer-mic-btn">
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
          <rect x="4.5" y="1" width="9" height="14" rx="4.5" stroke="#8e8e93" strokeWidth="1.5" />
          <path d="M1 12c0 4.5 3.5 8 8 8s8-3.5 8-8" stroke="#8e8e93" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="9" y1="20" x2="9" y2="23" stroke="#8e8e93" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  </div>
);
