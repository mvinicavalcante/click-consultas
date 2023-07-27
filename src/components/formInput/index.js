import React, { useState } from "react";
import "./styles.css";

const FormInput = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      className="form-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
