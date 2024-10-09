import React from "react";

import headerLogo from "../assets/logo.svg"
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={headerLogo} alt="" className="logo" />
      </div>
    </header>
  );
};

export default Header;
