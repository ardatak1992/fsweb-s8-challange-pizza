import React from "react";

const RadioGroup = ({ name, options, handleChange, form, labels }) => {
  return (
    <>
      {options.map((option, index) => (
        <div key={index} className="form-section">
          <input
            type="radio"
            name={name}
            id={option}
            value={option}
            onChange={handleChange}
            checked={form.size === option}
          />
          <label htmlFor={option} cy-test={option}>
            {labels[index]}
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioGroup;
