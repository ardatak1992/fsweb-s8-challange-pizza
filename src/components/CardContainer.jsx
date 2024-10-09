import React from "react";
import { useHistory } from "react-router-dom";

import "./CardContainer.css";

const CardContainer = () => {
  const history = useHistory();

  return (
    <section id="cards">
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>Özel Lezzetus</h2>
            <p>Position:Absolute Acı Burger</p>
            <button
              className="btn btn-light"
              onClick={() => history.push("/order")}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-text">
            <h2>Hackathlon Burger Menu</h2>
            <button
              className="btn btn btn-light"
              onClick={() => history.push("/order")}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-text">
            <h2>
              <span>Çoooook</span> hızlı npm gibi kurye
            </h2>
            <button
              className="btn btn btn-light"
              onClick={() => history.push("/order")}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
