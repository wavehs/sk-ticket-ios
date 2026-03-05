import * as React from "react";
import "./style.css";

export const Header = () => (
  <div className="header-container">
    {/* Navigation Bar */}
    <div className="nav-bar">
      <div className="nav-left">
        <span className="back-chevron">‹</span>
        <span className="back-badge">31</span>
      </div>
    </div>

    {/* Contact Info */}
    <div className="contact-info">
      <div className="avatar">
        <div className="avatar-circle">
          <svg className="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="8" r="4" />
            <path d="M12 14c-6 0-8 3-8 5v1h16v-1c0-2-2-5-8-5z" />
          </svg>
        </div>
      </div>
      <div className="contact-number">
        <span>1166</span>
        <span className="chevron-right">›</span>
      </div>
      <div className="message-type">
        Текстовое сообщение • SMS
      </div>
      <div className="message-date">
        Сегодня 19:43
      </div>
    </div>
  </div>
);
