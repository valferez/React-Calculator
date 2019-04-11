import React from "react";
import "./ClearButton.scss";

export const ClearButton = props => (
  <div id={props.id} className="clear-btn close" onClick={props.handleClear}>
    {props.children}
  </div>
);
