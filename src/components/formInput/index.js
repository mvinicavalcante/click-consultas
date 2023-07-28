import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles.css";

const FormInput = ({ placeholder, type, value, onChange, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="form-input-container">
      {type === "password" && (
        <div onClick={togglePasswordVisibility} className="view-password">
          {showPassword ? (
            <FaEyeSlash id="eye-slash" color="#00bf63" />
          ) : (
            <FaEye id="eye" color="#00bf63" />
          )}
        </div>
      )}
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
