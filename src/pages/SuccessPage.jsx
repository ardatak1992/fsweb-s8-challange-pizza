import { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { capitalize } from "../helperFunctions";
import Header from "../components/Header";
import "./SuccessPage.css";

const SuccessPage = () => {
  const location = useLocation();
  
  if (!location.formData) {
    return <Redirect to="/"/>; // Redirect to form page if not submitted
  }

  const [formData, setFormData] = useState(location.formData);
  const [totalCost, setTotalCost] = useState(location.totalCost);
  const [toppingCost, setToppingCost] = useState(location.toppingCost);
  
  return (
    <div className="success-background">
      <div className="content">
        <h2>lezzetin yolda</h2>
        <h1>SİPARİŞ ALINDI</h1>
        <hr />
        
        <div className="order-info">
          <h3>Position Absolute Acı Pizza</h3>
          <p>
            Boyut: <span>{capitalize(formData.size)}</span>
          </p>
          <p>
            Hamur: <span>{capitalize(formData.dough)}</span>
          </p>
          <p>
            Ek Malzemeler:
            <span>
              {formData.toppings.map((topping, index) => {
                return (
                  capitalize(topping) +
                  (index < formData.toppings.length - 1 ? ", " : ".")
                );
              })}
            </span>
          </p>
        </div>
        <div className="purchase-info">
          <h3>Sipariş Toplamı</h3>
          <div className="topping-sum">
            <p>Seçimler</p>
            <p>{toppingCost.toFixed(2)}₺</p>
          </div>
          {formData.fastDelivery && <div className="topping-cost">
            <p>Hızlı Teslimat</p>
            <p>{location.fastDeliveryCost}₺</p>
          </div>}

          <div className="total-sum">
            <p>Toplam</p>
            <p>{totalCost.toFixed(2)}₺</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
