import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles.css";

const FormInput = ({ label, type, placeholder, value, onChange, classNameGroup, disabled }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={`form-group ${classNameGroup} d-flex flex-column`}>
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
        {type === "sex" ? (
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
        ) : type === "file" ? (
          <input
            className="form-control"
            type={type}
            value={value}
            onChange={onChange}
          />
        ) : type === "pixType" ? (
          <select onChange={onChange} className="form-select">
            <option selected disabled>
              Selecione o tipo da chave pix
            </option>
            <option value={"cpf"}>CPF</option>
            <option value={"cnpj"}>CNPJ</option>
            <option value={"email"}>E-mail</option>
            <option value={"celular"}>Número de celular</option>
            <option value={"aleatoria"}>Chave aleatória</option>
          </select>
        ) : (
          <input
            className="form-input"
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        )}
      </>
    </div>
  );
};

export default FormInput;
