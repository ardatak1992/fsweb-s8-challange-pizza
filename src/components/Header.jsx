import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="src\assets\logo.svg" alt="" className="logo" />
        <div className="link-chain">
          <Link className="link" to="/">
            Ana Sayfa
          </Link>{" "}
          -{" "}
          <Link className="link active" to="/order">
            Sipariş Oluştur
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
