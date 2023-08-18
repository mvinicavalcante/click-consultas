import "./styles.css";

import { useState } from "react";
import FormInput from "../../../../components/form/formInput";
import FinishingSide from "../../../../components/finishingSide";

const ProfileEdit = () => {
  const [actionView, setActionView] = useState("dados"); // Set default action

  //Simulando um objeto(usuário) retornado de uma requisição
  const userDefault = {
    tipo: "medico",
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
    <div className="row h-100">
      <div className="profile-edit-container col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
        <h1>Editar perfil</h1>
        <div className="px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-center flex-column">
          <nav className="edit-nav">
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
          <div className="body-edit">
            <div className="row">
              {actionView === "dados" ? (
                <>
                  <div className="col-md-6">
                    <div className="user-data">
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
                          pattern={"[0-9]{3}-[0-9]{3}"}
                          type={"tel"}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="user-data">
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
                <div className="row mt-5">
                  <div className="col-md-6">
                    <div className="user-data">
                      <FormInput label={"Senha"} type={"password"} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="user-data">
                      <FormInput label={"Confirmar senha"} type={"password"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <FinishingSide
          icon="fa-solid fa-user-plus"
          path="/principal"
          action="Finalizar"
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
