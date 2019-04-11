import React from "react";
import "./Button.scss";
const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
  <div
    // id={props.id}
    className={`button-wrapper raise ${
      isOperator(props.children) ? null : "operator"
      }`}
    onClick={() => props.handleClick(props.children)}
  // onClick={props.handleClick(props.children)}
  >
    {props.children}
  </div>
);