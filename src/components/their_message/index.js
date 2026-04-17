import * as React from "react";
import "./style.css";

export const TheirMessage = ({
  date,
  endTime,
  messageHash,
  startTime,
  isLast,
  isFirst,
}) => {
  const classes = [
    "their-message-bubble",
    isLast ? "is-last" : "",
    isFirst ? "is-first" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="their-message-wrapper">
      <div className={classes}>
        <span className="msg-line">DPMK, a.s.</span>
        <span className="msg-line">SMS prestupny CL 1.50 EUR.</span>
        <span className="msg-line">
          Platnost od <span className="msg-underline">{date} {startTime}</span> do
        </span>
        <span className="msg-line">{endTime} hod.</span>
        <span className="msg-line">{messageHash}</span>
      </div>
    </div>
  );
};