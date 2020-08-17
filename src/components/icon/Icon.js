import React from "react";
import "./icon.css";

const Icon = (props) => {
  return (
    <div className="icon-wrap">
      <h1 className="icon">{props.icon}</h1>
    </div>
  );
};

export default Icon;
