import React from "react";
import { capitalize } from "../helperFunctions";

const SelectGroup = ({ name, options, form, handleChange, emptyValue }) => {
  return (
    <select name={name} onChange={handleChange} defaultValue={form.dough}>
      {options.map((option) => {
        if (option === "") {
          return <option key={option} value="">{emptyValue}</option>;
        } else {
          return <option key={option} value="süpper ince">{capitalize(option)}</option>;
        }
      })}
    </select>
  );
};

export default SelectGroup;
