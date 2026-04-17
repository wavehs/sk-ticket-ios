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
      
      <div className="nav-center">
        <div className="contact-avatar">
          <svg viewBox="0 0 56 56" width="56" height="56">
            <circle cx="28" cy="20" r="11" fill="#ffffff" />
            <path d="M28 36 C 11 36 5 53 5 56 L 51 56 C 51 53 45 36 28 36 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="contact-name-pill">
          <span className="contact-name-text">1166</span>
          <span className="contact-chevron">›</span>
        </div>
      </div>
    </div>
  </div>
);
