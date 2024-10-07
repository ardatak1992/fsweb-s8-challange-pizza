import React from "react";

import "./Checkbox.css"

const Checkbox = ({ name, form, handleChange }) => {
  function capitalize(name) {
    const words = name.split(" ");
    return words
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
      .join(" ");
  }

 

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        name="toppings"
        value={name}
        onChange={handleChange}
        checked={form.toppings.includes(name)}
      />
      <label htmlFor={name}>
        {capitalize(name)}
      </label>
    </div>
  );
};

export default Checkbox;
