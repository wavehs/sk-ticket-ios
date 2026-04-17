import * as React from "react";
import "./style.css";

export const MyMessage = ({ isLast = true, isFirst = true }) => {
  const classes = [
    "my-message-bubble",
    isLast ? "is-last" : "",
    isFirst ? "is-first" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="my-message-wrapper">
      <div className={classes}></div>
    </div>
  );
};