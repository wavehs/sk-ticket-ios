import * as React from "react";

const dividerStyle = {
  padding: "8px 0",
  textAlign: "center",
};

const dateStyle = {
  color: "#8e8e93",
  fontSize: "12px",
  fontWeight: "400",
};

export const Divider = ({ date }) =>
  date ? (
    <div style={dividerStyle}>
      <span style={dateStyle}>{date}</span>
    </div>
  ) : null;
