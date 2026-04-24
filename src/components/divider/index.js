import * as React from "react";

const dividerContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px 0",
  gap: "4px"
};

const messageTypeStyle = {
  color: "var(--divider-text)",
  fontSize: "11px",
  fontWeight: "500",
};

const dateStyle = {
  color: "var(--divider-text)",
  fontSize: "11px",
  fontWeight: "500",
};

export const Divider = ({ date, isFirst }) =>
  date ? (
    <div style={dividerContainerStyle}>
      {isFirst && <span style={messageTypeStyle}>Текстовое сообщение • SMS</span>}
      <span style={dateStyle}>{date}</span>
    </div>
  ) : null;
