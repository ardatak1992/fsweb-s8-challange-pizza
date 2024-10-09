import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <Link to="/order">
          <img src="/src/assets/icons/1.svg" alt="" />
          YENİ! Kore
        </Link>
        <Link to="/order">
          <img src="/src/assets/icons/2.svg" alt="" />
          Pizza
        </Link>
        <Link to="/order">
          <img src="/src/assets/icons/3.svg" alt="" />
          Burger
        </Link>
        <Link to="/order">
          <img src="/src/assets/icons/4.svg" alt="" />
          Kızartmalar
        </Link>
        <Link to="/order">
          <img src="/src/assets/icons/5.svg" alt="" />
          Fast food
        </Link>
        <Link to="/order">
          <img src="/src/assets/icons/6.svg" alt="" />
          Gazlı İçecek
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
