import * as React from "react";
import "./style.css";

export const TheirMessage = ({ date, endTime, messageHash, startTime }) => (
  <div className="their-message-wrapper">
    <div className="their-message-bubble">
      <span className="msg-line">DPMK, a.s.</span>
      <span className="msg-line">SMS prestupny CL 1.50 EUR.</span>
      <span className="msg-line">
        Platnost <span className="msg-underline">od {date} {startTime}</span> do
      </span>
      <span className="msg-line">
        <span className="msg-underline">{endTime}</span> hod.
      </span>
      <span className="msg-line">{messageHash}</span>
    </div>
  </div>
);
