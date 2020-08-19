import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const ButtonWrapper = (props) => {
  return <div className="button-wrapper">{props.children}</div>;
};

const Button = ({ name, value, handleClick, disabled, type }) => {
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

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
