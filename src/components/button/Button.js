import React from "react";
import "./button.css";

export const ButtonWrapper = (props) => {
  return <div className="button-wrapper">{props.children}</div>;
};

const Button = (props) => {
  const { name, value, handleClick, disabled, type } = props;
  return (
    <button
      className={`button ${type}`}
      name={name}
      value={value}
      onClick={handleClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
