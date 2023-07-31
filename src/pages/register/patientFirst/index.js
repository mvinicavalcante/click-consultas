import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import FormInput from "../../../components/form/formInput";

const PatientFirstPage = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const user = {
    nome: name,
    cpf: cpf,
    telefone: telephone,
    cidade: city,
    senha: password,
    dataNascimento: birthdate,
    sexo: sex,
    email: email,
    estado: state,
  };

  function redirectToPage() {
    if (password != passwordConfirm) alert("Senhas não são idênticas");
    window.location.href = "/cadastro/paciente-plano";
    var alertList = document.querySelectorAll(".alert");
    alertList.forEach(function (alert) {
      //new bootstrap.Alert(alert);
    });
    console.log(user);
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-hidden justify-content-center align-items-center">
      <div className="row vh-100">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <FontAwesomeIcon icon={faUserPlus} className="icon" />
          </div>
        </div>

        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <div className="row g-4 g-lg-5">
            <div className="col-md-6 d-flex">
              <div className="d-flex flex-column">
                <FormInput
                  label={"Nome"}
                  type={"name"}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <FormInput
                  label={"CPF"}
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                />
                <FormInput
                  label={"Telefone"}
                  onChange={(e) => setTelephone(e.target.value)}
                  value={telephone}
                />
                <FormInput
                  label={"Cidade"}
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
                <FormInput
                  label={"Senha"}
                  type={"password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="d-flex flex-column mt-1">
                <FormInput
                  label={"Data"}
                  type={"date"}
                  onChange={(e) => setBirthdate(e.target.value)}
                  value={birthdate}
                />
                <FormInput
                  label={"Sexo"}
                  type={"sex"}
                  onChange={(e) => setSex(e.target.value)}
                  value={sex}
                />
                <FormInput
                  label={"Email"}
                  type={"email"}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <FormInput
                  label={"Estado"}
                  type={"state"}
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                />
                <FormInput
                  label={"Confirmar senha"}
                  type={"password"}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                />
              </div>
            </div>
            <div
              onClick={redirectToPage}
              className="next d-flex align-items-center justify-content-end"
            >
              <label>Próximo</label>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFirstPage;
