import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./OrderForm.css";

import Checkbox from "./Checkbox";
import RadioGroup from "./RadioGroup";
import SelectGroup from "./SelectGroup";

const initialForm = {
  size: "",
  dough: "",
  toppings: [],
  memo: "",
  fastDelivery: false,
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

const sizeOptions = ["small", "medium", "large"];
const doughOptions = ["", "süpper ince", "ince", "kalın"];
const fastDeliveryCost = 50;

const OrderForm = () => {
  const [form, setForm] = useState(initialForm);
  const [pizzaNum, setPizzaNum] = useState(1);
  const [toppingCost, setToppingCost] = useState(0);
  const [totalCost, setTotalCost] = useState(basePizzaCost);
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const toppingSum = form.toppings.length * 5 * pizzaNum;
    let totalSum = basePizzaCost * pizzaNum + toppingSum;
    if (form.fastDelivery) {
      totalSum += 50;
    }

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
    } else if (e.target.name === "fastDelivery") {
      setForm({ ...form, fastDelivery: !form.fastDelivery });
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
      axios
        .post("https://reqres.in/api/pizza", {
          form,
          pizzaNum,
          toppingCost,
          totalCost,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      history.push({
        pathname: "/success",
        formData: form,
        toppingCost,
        totalCost,
        fastDeliveryCost
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pizza-type-section">
        <div className="size">
          <h3>Boyut Seç</h3>
          <div className="radio-buttons">
            <RadioGroup
              name="size"
              options={sizeOptions}
              form={form}
              handleChange={handleChange}
              labels={["S", "M", "L"]}
            />
          </div>
          {!form.size && <p className="error-message">Lütfen boyut seçiniz.</p>}
        </div>
        <div className="dough-type">
          <h3>Hamur Seç</h3>
          <SelectGroup
            name="dough"
            options={doughOptions}
            form={form}
            handleChange={handleChange}
            emptyValue="--Hamur Kalınlığı Seç--"
          />

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
              name="toppings"
              label={top}
              form={form}
              handleChange={handleChange}
              checked={form.toppings.includes(top)}
              disabled={
                form.toppings.length >= 10 && !form.toppings.includes(top)
              }
            />
          ))}
        </div>
        {form.toppings.length === 10 && (
          <p className="error-message">En fazla 10 malzeme seçebilirsiniz.</p>
        )}
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
      <div className="fast-delivery-section">
        <Checkbox
          name="fastDelivery"
          label="Hızlı Teslimat"
          form={form}
          handleChange={handleChange}
          checked={form.fastDelivery}
          disabled={false}
        />
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
          {form.fastDelivery && <div className="topping-cost">
            <p>Hızlı Teslimat</p>
            <p>{fastDeliveryCost.toFixed(2)}₺</p>
          </div>}
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
