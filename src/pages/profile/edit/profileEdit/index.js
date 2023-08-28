import "./styles.css";

import { useState } from "react";
import FormInput from "../../../../components/form/formInput";
import FinishingSide from "../../../../components/finishingSide";

const ProfileEdit = () => {
  const [actionView, setActionView] = useState("dados"); // Set default action

  //Simulando um objeto(usuário) retornado de uma requisição
  const userDefault = {
    tipo: "paciente",
    nome: "João da Silva",
    cpf: "000.000.000-00",
    dataNascimento: "01/01/2000",
    sexo: "Masculino",
    email: "teste@ufape.com.br",
    telefone: "(00) 00000-0000",
    cidade: "Garanhuns",
    estado: "Pernambuco",
    senha: "123456",
  };

  function navAction(action) {
    const dados = document.getElementById("dados");
    const senha = document.getElementById("senha");
    if (action === "dados") {
      dados.classList.add("active");
      senha.classList.remove("active");
      setActionView("dados");
    } else if (action === "senha") {
      dados.classList.remove("active");
      senha.classList.add("active");
      setActionView("senha");
    }
  }

  return (
    <div id="container" className="container-fluid vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Editar perfil</h2>
            </div>
            <div className="col-12">
              <nav className="col-12 mt-5 mb-4 text-center">
                <span
                  onClick={() => navAction("dados")}
                  id="dados"
                  className="nav-item active"
                >
                  Dados pessoais
                </span>
                <span
                  onClick={() => navAction("senha")}
                  id="senha"
                  className="nav-item"
                >
                  Senha
                </span>
              </nav>
              <div className="col-12">
                <div
                  className="row justify-content-center"
                  id="content-container"
                >
                  {actionView === "dados" ? (
                    <>
                      <div className="col-8 col-lg-5 col-xl-4">
                        <div className="user-data mt-4">
                          <FormInput
                            label={"Nome"}
                            placeholder={userDefault.nome}
                            type={"text"}
                          />
                          <FormInput
                            label={"CPF"}
                            placeholder={userDefault.cpf}
                            type={"text"}
                          />
                          <FormInput
                            id={"phone"}
                            label={"Telefone"}
                            placeholder={userDefault.telefone}
                            pattern={"[0-9]{3}-[0-9]{3}"}
                            type={"tel"}
                          />
                          {userDefault.tipo === "paciente" && (
                            <FormInput
                              id={"cidade"}
                              label={"Cidade"}
                              placeholder={userDefault.cidade}
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-8 col-lg-5 col-xl-4">
                        <div className="user-data mt-0 mt-lg-4">
                          <FormInput
                            label={"Data de nascimento"}
                            placeholder={userDefault.dataNascimento}
                            min={"01-01-1800"}
                            max={"31-12-2300"}
                            type={"date"}
                          />
                          <FormInput label={"Sexo"} type={"sex"} />
                          <FormInput
                            id={"email"}
                            label={"Email"}
                            placeholder={userDefault.email}
                            type={"mail"}
                          />
                          {userDefault.tipo === "paciente" && (
                            <FormInput
                              id={"estado"}
                              label={"Estado"}
                              placeholder={userDefault.estado}
                              type={"text"}
                            />
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-8 col-lg-5 col-xl-4">
                        <div className="user-data mt-4">
                          <FormInput label={"Senha"} type={"password"} />
                        </div>
                      </div>
                      <div className="col-8 col-lg-5 col-xl-4">
                        <div className="user-data mt-4">
                          <FormInput
                            label={"Confirmar senha"}
                            type={"password"}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 pt-4 pt-md-0">
          <FinishingSide
            icon="fa-solid fa-user-plus"
            path="/principal"
            action="Finalizar"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
