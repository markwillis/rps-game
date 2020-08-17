import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-header">rock. paper. scissors</h1>
      <p>
        Rock beats Scissors. Scissors beats paper. Paper beats Rock. That's all.
      </p>
    </nav>
  );
};

export default Header;
