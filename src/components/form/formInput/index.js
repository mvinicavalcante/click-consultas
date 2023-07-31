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
      {type === "password" ? (
        <div className="position-relative">
          <i onClick={togglePasswordVisibility} className="view-password">
            {showPassword ? (
              <FaEyeSlash id="eye-slash" color="#00bf63" />
            ) : (
              <FaEye id="eye" color="#00bf63" />
            )}
          </i>
          <input
            className="form-input"
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : type === "sex" ? (
        <select onChange={onChange} className="form-select">
          <option className="option-disabled" selected disabled>
            -- Selecione o seu sexo --
          </option>
          <option value={"f"}>Feminino</option>
          <option value={"m"}>Masculino</option>
          <option value={"n"}>Prefiro não informar</option>
        </select>
      ) : type === "state" ? (
        <select onChange={onChange} className="form-select">
          <option className="option-disabled" selected disabled>
            -- Selecione o seu estado --
          </option>
          <option value={"AC"}>Acre (AC)</option>
          <option value={"AL"}>Alagoas (AL)</option>
          <option value={"AP"}>Amapá (AP)</option>
          <option value={"AM"}>Amazonas (AM)</option>
          <option value={"BA"}>Bahia (BA)</option>
          <option value={"CE"}>Ceará (CE)</option>
          <option value={"DF"}>Distrito Federal (DF)</option>
          <option value={"ES"}>Espírito Santo (ES)</option>
          <option value={"GO"}>Goiás (GO)</option>
          <option value={"MA"}>Maranhão (MA)</option>
          <option value={"MT"}>Mato Grosso (MT)</option>
          <option value={"MS"}>Mato Grosso do Sul (MS)</option>
          <option value={"MG"}>Minas Gerais (MG)</option>
          <option value={"PA"}>Pará (PA)</option>
          <option value={"PB"}>Paraíba (PB)</option>
          <option value={"PR"}>Paraná (PR)</option>
          <option value={"PE"}>Pernambuco (PE)</option>
          <option value={"PI"}>Piauí (PI)</option>
          <option value={"RJ"}>Rio de Janeiro (RJ)</option>
          <option value={"RN"}>Rio Grande do Norte (RN)</option>
          <option value={"RS"}>Rio Grande do Sul (RS)</option>
          <option value={"RO"}>Rondônia (RO)</option>
          <option value={"RR"}>Roraima (RR)</option>
          <option value={"SC"}>Santa Catarina (SC)</option>
          <option value={"SP"}>São Paulo (SP)</option>
          <option value={"SE"}>Sergipe (SE)</option>
          <option value={"TO"}>Tocantins (TO)</option>
        </select>
      ) : (
        <input
          className="form-input"
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default FormInput;
