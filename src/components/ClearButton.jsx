import React from "react";
import "./ClearButton.css";

export const ClearButton = props => (
  <div id={props.id} className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);
