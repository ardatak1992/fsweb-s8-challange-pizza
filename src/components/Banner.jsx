import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h2>fırsatı kaçırma</h2>
        <h1>
          Kod acıktırır, <span>pizza doyurur.</span>
        </h1>
        <Link to="/order">
          <button>Acıktım</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
