import React from "react";
import { Link } from "react-router-dom";
import OrderForm from "../components/OrderForm";

import "./OrderPage.css";

const OrderPage = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="info-background">
          <img src="src/assets/form-banner.png" alt="" />

          <div className="info-container">
            <div className="link-chain">
              <Link className="link" to="/">
                Ana Sayfa
              </Link>{" "}
              -{" "}
              <Link className="link active-link" to="/order">
                Sipariş Oluştur
              </Link>
            </div>
            <h1 className="title">Position Absolute Acı Pizza</h1>
            <div className="num-content">
              <p className="price">85.00₺</p>
              <div className="social-nums">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <div className="info">
              Frontend Dev olarak hala position: absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </div>
          </div>
        </div>
        <OrderForm />
      </div>
    </div>
  );
};

export default OrderPage;
