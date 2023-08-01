import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserDoctor, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import FormInput from "../form/formInput";

const UserRegister = ({ type }) => {
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
    senha: password,
    dataNascimento: birthdate,
    sexo: sex,
    email: email
  };

  if (type === "patient") {
    user.cidade = city;
    user.estado = state;
  }

  function redirectToPage() {
    if (password !== passwordConfirm)
      return alert("Senhas não são idênticas");

    if (type === "patient")
      window.location.href = "/cadastro/paciente/plano";
    else
      window.location.href = "/cadastro/medico/profissional";

    var alertList = document.querySelectorAll(".alert");
    alertList.forEach(function (alert) {
      //new bootstrap.Alert(alert);
    });
    console.log(user);
  }

  return (
    <div className="container-fluid vh-100 vw-100 justify-content-center align-items-center">
      <div className="overflow-auto row vh-100">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 my-3 m-md-0 d-flex justify-content-center">
            {type === "patient" ?
              <FontAwesomeIcon icon={faUserPlus} color="#1E3050" className="icon" />
              :
              <FontAwesomeIcon icon={faUserDoctor} color="#1E3050" className="icon" />
            }
          </div>
        </div>

        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <div className="row px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-center">
            <div className="col-8 col-md-6 pt-3 pt-md-0">
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
              {type === "patient" &&
                <FormInput
                  label={"Cidade"}
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              }
              <FormInput
                label={"Senha"}
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="col-8 col-md-6 d-flex flex-column-reverse flex-md-column">
              <FormInput
                label={"Data de Nascimento"}
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
              {type === "patient" &&
                <FormInput
                  label={"Estado"}
                  type={"state"}
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                />
              }
              <FormInput
                label={"Confirmar senha"}
                type={"password"}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}
              />
            </div>

            <div onClick={redirectToPage} className="next d-flex align-items-center justify-content-center justify-content-md-end">
              <p>Próximo</p>
              <p><FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;