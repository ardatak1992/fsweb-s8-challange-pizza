import { useState } from "react";

import "./OrderForm.css";

import Checkbox from "./Checkbox";

const initialForm = {
  size: "small",
  dough: "",
  toppings: [],
  memo: "",
};

const toppingArr = [
  "peperonni",
  "tavuk ızgara",
  "mısır",
  "sarımsak",
  "ananas",
  "sosis",
  "soğan",
  ,
  "biber",
  "kabak",
  "kanada jambonu",
  "domates",
  "jalepeno",
  "sucuk",
];

const OrderForm = () => {
  const [form, setForm] = useState(initialForm);

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

  return (
    <form>
      <div className="pizza-type-section">
        <div className="size">
          <h3>Boyut Seç</h3>
          <div className="form-section">
            <input
              type="radio"
              name="size"
              id="small"
              value="small"
              onChange={handleChange}
              checked={form.size === "small"}
            />
            <label htmlFor="small">Küçük</label>
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
            <label htmlFor="small">Orta</label>
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
            <label htmlFor="small">Büyük</label>
          </div>
        </div>
        <div className="dough-type">
          <h3>Hamur Seç</h3>
          <select name="dough" id="" onChange={handleChange}>
            <option value="">Hamur Kalınlığı</option>
            <option value="thin">İnce</option>
            <option value="thick">Kalın</option>
          </select>
        </div>
      </div>
      <div className="toppings-section">
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="toppings-checkboxes">
          {toppingArr.map((top) => (
            <Checkbox name={top} form={form} handleChange={handleChange} />
          ))}
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
