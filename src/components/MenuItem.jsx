import React from "react";
import { Link } from "react-router-dom";

import "./MenuItem.css";

const MenuItem = ({ title, score, comments, cost, imgUrl }) => {
  return (
    <Link to="/order" className="item-card">
      <img src={imgUrl} alt="" />
      <h4 className="item-title">{title}</h4>
      <div className="item-info">
        <p className="score">{score}</p>
        <p className="comments">({comments})</p>
        <p className="cost">{cost}₺</p>
      </div>
    </Link>
  );
};

export default MenuItem;
