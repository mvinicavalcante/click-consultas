import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles.css";

const FormInput = ({ label, type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <label className="form-label">{label}</label>
      <>
        {type === "password" &&
          <div className="position-relative d-flex justify-content-end">
            <i onClick={togglePasswordVisibility} className="view-password">
              {showPassword ?
                <FaEyeSlash id="eye-slash" color="#00bf63" />
                :
                <FaEye id="eye" color="#00bf63" />
              }
            </i>
          </div>
        }
        <input
          className="form-input"
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </>
    </>
  );
};

export default FormInput;
