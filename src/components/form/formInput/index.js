import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles.css";

const FormInput = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  classNameGroup,
  disabled,
  pattern,
  min,
  max,
  valueSelect,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={`form-group ${classNameGroup} d-flex flex-column`}>
      <label className="form-label">{label}</label>
      <>
        {type === "password" && (
          <div className="position-relative d-flex justify-content-end">
            <i onClick={togglePasswordVisibility} className="view-password">
              {showPassword ? (
                <FaEyeSlash id="eye-slash" color="#00bf63" />
              ) : (
                <FaEye id="eye" color="#00bf63" />
              )}
            </i>
          </div>
        )}
        {type === "sex" ? (
          <select onChange={onChange} className="form-select">
            <option className="option-disabled" selected disabled>
              -- Selecione o seu sexo --
            </option>
            <option value={"f"}>Feminino</option>
            <option value={"m"}>Masculino</option>
            <option value={"n"}>Prefiro não informar</option>
          </select>
        ) : type === "date" ? (
          <input
            onChange={onChange}
            className="form-input"
            min={min}
            max={max}
            type="date"
          />
        ) : type === "state" ? (
          <select
            defaultValue={valueSelect}
            onChange={onChange}
            className="form-select"
            value={valueSelect}
          >
            <option value={""} className="option-disabled" selected disabled>
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
        ) : type === "specialty" ? (
          <select
            defaultValue={valueSelect}
            onChange={onChange}
            className="form-select"
            value={valueSelect}
          >
            <option value={""} className="option-disabled" selected disabled>
              -- Selecione a especialidade --
            </option>
            <option value={"Acupuntura"}>Acupuntura</option>
            <option value={"Alergia e Imunologia"}>Alergia e Imunologia</option>
            <option value={"Anestesiologia"}>Anestesiologia</option>
            <option value={"Angiologia"}>Angiologia</option>
            <option value={"Cardiologia"}>Cardiologia</option>
            <option value={"Cirurgia Cardiovascular"}>Cirurgia Cardiovascular</option>
            <option value={"Cirurgia da Mão"}>Cirurgia da Mão</option>
            <option value={"Cirurgia de Cabeça e Pescoço"}>Cirurgia de Cabeça e Pescoço</option>
            <option value={"Cirurgia do Aparelho Digestivo"}>Cirurgia do Aparelho Digestivo</option>
            <option value={"Cirurgia Geral"}>Cirurgia Geral</option>
            <option value={"Cirurgia Oncológica"}>Cirurgia Oncológica</option>
            <option value={"Cirurgia Pediátrica"}>Cirurgia Pediátrica</option>
            <option value={"Cirurgia Plástica"}>Cirurgia Plástica</option>
            <option value={"Cirurgia Torácica"}>Cirurgia Torácica</option>
            <option value={"Cirurgia Vascular"}>Cirurgia Vascular</option>
            <option value={"Clínica Médica"}>Clínica Médica</option>
            <option value={"Coloproctologia"}>Coloproctologia</option>
            <option value={"Dermatologia"}>Dermatologia</option>
            <option value={"Endocrinologia e Metabologia"}>Endocrinologia e Metabologia</option>
            <option value={"Endoscopia"}>Endoscopia</option>
            <option value={"Gastroenterologia"}>Gastroenterologia</option>
            <option value={"Genética Médica"}>Genética Médica</option>
            <option value={"Geriatria"}>Geriatria</option>
            <option value={"Ginecologia e Obstetrícia"}>Ginecologia e Obstetrícia</option>
            <option value={"Hematologia e Hemoterapia"}>Hematologia e Hemoterapia</option>
            <option value={"Homeopatia"}>Homeopatia</option>
            <option value={"Infectologia"}>Infectologia</option>
            <option value={"Mastologia"}>Mastologia</option>
            <option value={"Medicina de Emergência"}>Medicina de Emergência</option>
            <option value={"Medicina de Família e Comunidade"}>Medicina de Família e Comunidade</option>
            <option value={"Medicina do Trabalho"}>Medicina do Trabalho</option>
            <option value={"Medicina de Tráfego"}>Medicina de Tráfego</option>
            <option value={"Medicina Esportiva"}>Medicina Esportiva</option>
            <option value={"Medicina Física e Reabilitação"}>Medicina Física e Reabilitação</option>
            <option value={"Medicina Intensiva"}>Medicina Intensiva</option>
            <option value={"Medicina Legal e Perícia Médica"}>Medicina Legal e Perícia Médica</option>
            <option value={"Medicina Nuclear"}>Medicina Nuclear</option>
            <option value={"Medicina Preventiva e Social"}>Medicina Preventiva e Social</option>
            <option value={"Nefrologia"}>Nefrologia</option>
            <option value={"Neurocirurgia"}>Neurocirurgia</option>
            <option value={"Neurologia"}>Neurologia</option>
            <option value={"Nutrologia"}>Nutrologia</option>
            <option value={"Oftalmologia"}>Oftalmologia</option>
            <option value={"Oncologia Clínica"}>Oncologia Clínica</option>
            <option value={"Ortopedia e Traumatologia"}>Ortopedia e Traumatologia</option>
            <option value={"Otorrinolaringologia"}>Otorrinolaringologia</option>
            <option value={"Patologia"}>Patologia</option>
            <option value={"Patologia Clínica/ Medicina Laboratorial"}>Patologia Clínica/ Medicina Laboratorial</option>
            <option value={"Pediatria"}>Pediatria</option>
            <option value={"Pneumologia"}>Pneumologia</option>
            <option value={"Psiquiatria"}>Psiquiatria</option>
            <option value={"Radiologia e Diagnóstico por Imagem"}>Radiologia e Diagnóstico por Imagem</option>
            <option value={"Radioterapia"}>Radioterapia</option>
            <option value={"Reumatologia"}>Reumatologia</option>
            <option value={"Urologia"}>Urologia</option>

          </select>
        ): type === "pixType" ? (
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
        ) : type === "diaSemana" ? (
          <select onChange={onChange} className="form-select">
            <option selected disabled>
              Selecione o dia da semana
            </option>
            <option value={"Segunda-Feira"}>Segunda-Feira</option>
            <option value={"Terça-Feira"}>Terça-Feira</option>
            <option value={"Quarta-Feira"}>Quarta-Feira</option>
            <option value={"Quinta-Feira"}>Quinta-Feira</option>
            <option value={"Sexta-Feira"}>Sexta-Feira</option>
            <option value={"Sábado"}>Sabado</option>
            <option value={"Domingo"}>Domingo</option>
          </select>
        ) : type === "time" ? (
          <input type="time"
            className="form-input"
            timeformat="24h"
            value={value}
            onChange={onChange}>
            </input>
        ) : (
          <input
            className="form-input"
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            pattern={pattern}
          />
        )}
      </>
    </div>
  );
};

export default FormInput;
