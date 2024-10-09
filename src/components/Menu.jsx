import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/icons/1.svg";
import icon2 from "../assets/icons/2.svg";
import icon3 from "../assets/icons/3.svg";
import icon4 from "../assets/icons/4.svg";
import icon5 from "../assets/icons/5.svg";
import icon6 from "../assets/icons/6.svg";
import food1 from "../assets/foods/food-1.png";
import food2 from "../assets/foods/food-2.png";
import food3 from "../assets/foods/food-3.png";

import "./Menu.css";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    id: 1,
    title: "Terminal Pizza",
    score: 4.9,
    comments: 200,
    cost: 65,
    imgUrl: food1,
  },
  {
    id: 2,
    title: "Position Absolute Acı Pizza",
    score: 4.3,
    comments: 321,
    cost: 100,
    imgUrl: food2,
  },
  {
    id: 3,
    title: "useEffect Tavuklu Burger",
    score: 4.5,
    comments: 113,
    cost: 55,
    imgUrl: food3,
  },
];

const Menu = () => {
  return (
    <section id="menu">
      <h3>en çok paketlenene menüler</h3>
      <h2>Acıktıran Kodlara Doyuran Lezzeler</h2>
      <article className="menu-selectors">
        <Link className="menu-link" to="/order">
          <img src={icon1} alt="" />
          Ramen
        </Link>
        <Link className="menu-link active" to="/order">
          <img src={icon2} alt="" />
          Pizza
        </Link>
        <Link className="menu-link" to="/order">
          <img src={icon3} alt="" />
          Burger
        </Link>
        <Link className="menu-link" to="/order">
          <img src={icon4} alt="" />
          French fries
        </Link>
        <Link className="menu-link" to="/order">
          <img src={icon5} alt="" />
          Fast food
        </Link>
        <Link className="menu-link" to="/order">
          <img src={icon6} alt="" />
          Soft drinks
        </Link>
      </article>
      <div className="item-cards">
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            title={menuItem.title}
            score={menuItem.score}
            comments={menuItem.comments}
            cost={menuItem.cost}
            imgUrl={menuItem.imgUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
