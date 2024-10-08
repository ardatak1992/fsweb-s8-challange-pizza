import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./OrderForm.css";

import Checkbox from "./Checkbox";

const initialForm = {
  size: "",
  dough: "",
  toppings: [],
  memo: "",
};

const basePizzaCost = 85;

const toppingArr = [
  "peperonni",
  "tavuk ızgara",
  "mısır",
  "sarımsak",
  "ananas",
  "sosis",
  "soğan",
  "biber",
  "kabak",
  "kanada jambonu",
  "domates",
  "jalepeno",
  "sucuk",
];

const OrderForm = () => {
  const [form, setForm] = useState(initialForm);
  const [pizzaNum, setPizzaNum] = useState(1);
  const [toppingCost, setToppingCost] = useState(0);
  const [totalCost, setTotalCost] = useState(basePizzaCost);
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const toppingSum = form.toppings.length * 5 * pizzaNum;
    const totalSum = basePizzaCost * pizzaNum + toppingSum;
    const valid = form.size.length > 0 && form.dough.length > 0;
    setToppingCost(toppingSum);
    setTotalCost(totalSum);
    setIsValid(valid);
  }, [form, pizzaNum]);

  function handleChange(e) {
    if (e.target.name === "toppings") {
      let checkedToppings = [...form.toppings, e.target.value];
      if (form.toppings.includes(e.target.value)) {
        checkedToppings = form.toppings.filter(
          (topping) => topping !== e.target.value
        );
      }
      setForm({ ...form, toppings: checkedToppings });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }

  function handleAmount(num) {
    if (pizzaNum + num >= 1) {
      setPizzaNum(pizzaNum + num);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      history.push({ pathname: "/success", formData: form, toppingCost, totalCost });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pizza-type-section">
        <div className="size">
          <h3>Boyut Seç</h3>
          <div className="radio-buttons">
            <div className="form-section">
              <input
                type="radio"
                name="size"
                id="small"
                value="small"
                onChange={handleChange}
                checked={form.size === "small"}
              />
              <label htmlFor="small">S</label>
            </div>
            <div className="form-section">
              <input
                type="radio"
                name="size"
                id="medium"
                value="medium"
                onChange={handleChange}
                checked={form.size === "medium"}
              />
              <label htmlFor="medium">M</label>
            </div>
            <div className="form-section">
              <input
                type="radio"
                name="size"
                id="large"
                value="large"
                onChange={handleChange}
                checked={form.size === "large"}
              />
              <label htmlFor="large">L</label>
            </div>
          </div>
          {!form.size && <p className="error-message">Lütfen boyut seçiniz.</p>}
        </div>
        <div className="dough-type">
          <h3>Hamur Seç</h3>
          <select
            name="dough"
            id=""
            onChange={handleChange}
            defaultValue={form.dough}
          >
            <option value="">--Hamur Kalınlığı Seç--</option>
            <option value="süpper ince">Süpper İnce</option>
            <option value="ince">İnce</option>
            <option value="kalın">Kalın</option>
          </select>
          {!form.dough && (
            <p className="error-message">Lütfen hamur türü seçiniz.</p>
          )}
        </div>
      </div>
      <div className="toppings-section">
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="toppings-checkboxes">
          {toppingArr.map((top) => (
            <Checkbox
              key={top}
              name={top}
              form={form}
              handleChange={handleChange}
              disabled={
                form.toppings.length >= 10 && !form.toppings.includes(top)
              }
            />
          ))}
        </div>
      </div>
      <div className="memo-section">
        <h3>Sipariş Notu</h3>
        <textarea
          name="memo"
          value={form.memo}
          className="memo"
          placeholder="Siparişe Eklemek istediğin bir not var mı"
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
      <div className="order-section">
        <div className="amount-section">
          <button
            type="button"
            className="valueBtn"
            onClick={() => handleAmount(-1)}
          >
            -
          </button>
          <input
            type="number"
            className="pizzaNum"
            value={pizzaNum}
            onChange={(e) => setPizzaNum(Number(e.target.value))}
            min="1"
          />
          <button
            type="button"
            className="valueBtn"
            onClick={() => handleAmount(1)}
          >
            +
          </button>
        </div>
        <div className="final-info">
          <h3>Sipariş Toplamı</h3>
          <div className="topping-cost">
            <p>Seçimler </p>
            <p>{toppingCost.toFixed(2)}₺</p>
          </div>
          <div className="total-cost">
            <p>Toplam </p>
            <p>{totalCost.toFixed(2)}₺</p>
          </div>
        </div>
        <button className="order-button" disabled={!isValid}>
          Sipariş Ver
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
