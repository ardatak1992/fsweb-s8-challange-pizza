import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    id: 1,
    title: "Terminal Pizza",
    score: 4.9,
    comments: 200,
    cost: 65,
    imgUrl: "/src/assets/foods/food-1.png",
  },
  {
    id: 2,
    title: "Position Absolute Acı Pizza",
    score: 4.3,
    comments: 321,
    cost: 100,
    imgUrl: "/src/assets/foods/food-2.png",
  },
  {
    id: 3,
    title: "useEffect Tavuklu Burger",
    score: 4.5,
    comments: 113,
    cost: 55,
    imgUrl: "/src/assets/foods/food-3.png",
  },
];

const Menu = () => {
  return (
    <section id="menu">
      <h3>en çok paketlenene menüler</h3>
      <h2>Acıktıran Kodlara Doyuran Lezzeler</h2>
      <article className="menu-selectors">
        <Link className="menu-link" to="/order">
          <img src="/src/assets/icons/1.svg" alt="" />
          Ramen
        </Link>
        <Link className="menu-link active" to="/order">
          <img src="/src/assets/icons/2.svg" alt="" />
          Pizza
        </Link>
        <Link className="menu-link" to="/order">
          <img src="/src/assets/icons/3.svg" alt="" />
          Burger
        </Link>
        <Link className="menu-link" to="/order">
          <img src="/src/assets/icons/4.svg" alt="" />
          French fries
        </Link>
        <Link className="menu-link" to="/order">
          <img src="/src/assets/icons/5.svg" alt="" />
          Fast food
        </Link>
        <Link className="menu-link" to="/order">
          <img src="/src/assets/icons/6.svg" alt="" />
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
