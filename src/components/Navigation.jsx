import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import icon1 from "../assets/icons/1.svg";
import icon2 from "../assets/icons/2.svg";
import icon3 from "../assets/icons/3.svg";
import icon4 from "../assets/icons/4.svg";
import icon5 from "../assets/icons/5.svg";
import icon6 from "../assets/icons/6.svg";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <Link to="/order">
          <img src={icon1} alt="" />
          YENİ! Kore
        </Link>
        <Link to="/order">
          <img src={icon2} alt="" />
          Pizza
        </Link>
        <Link to="/order">
          <img src={icon3} alt="" />
          Burger
        </Link>
        <Link to="/order">
          <img src={icon4} alt="" />
          Kızartmalar
        </Link>
        <Link to="/order">
          <img src={icon5} alt="" />
          Fast food
        </Link>
        <Link to="/order">
          <img src={icon6} alt="" />
          Gazlı İçecek
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
