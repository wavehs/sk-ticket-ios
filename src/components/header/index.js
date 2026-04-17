import * as React from "react";
import "./style.css";

const randomBadgeCount = Math.floor(Math.random() * 151) + 51; // 51 to 201

export const Header = () => (
  <div className="header-container">
    <div className="nav-bar">
      <div className="nav-left">
        <div className="back-pill">
          <span className="back-chevron">‹</span>
          <span className="back-badge">{randomBadgeCount}</span>
        </div>
      </div>
      <div className="nav-right"></div>
    </div>
    <div className="contact-section">
      <div className="contact-avatar">
        <svg viewBox="0 0 60 60" width="60" height="60">
          <circle cx="30" cy="22" r="12" fill="#ffffff" />
          <path d="M30 38 C 12 38 6 56 6 60 L 54 60 C 54 56 48 38 30 38 Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="contact-name-pill">
        <span className="contact-name-text">1166</span>
        <span className="contact-chevron">›</span>
      </div>
    </div>
  </div>
);
