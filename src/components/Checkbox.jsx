import React from "react";
import { capitalize } from "../helperFunctions";

import "./Checkbox.css"

const Checkbox = ({ label, name, form, handleChange, checked, disabled }) => {
  
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        name={name}
        value={label}
        id={label}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={label}>
        {capitalize(label)}
      </label>
    </div>
  );
};

export default Checkbox;
