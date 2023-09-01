import "./styles.css";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormInput from "../../../../components/form/formInput";
import FinishingSide from "../../../../components/finishingSide";
import UserService from "../../../../services/UserService";
import PatientService from "../../../../services/PatientService";
import DoctorService from "../../../../services/DoctorService";

const ProfileEdit = () => {
  const [actionView, setActionView] = useState("dados");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    UserService.getById(sessionStorage.patientId ?? sessionStorage.doctorId)
      .then(response => {
        setName(response.data.nome)
        setCpf(response.data.cpf)
        setTelephone(response.data.telefone)
        setCity(response.data.cidade)
        setState(response.data.estado)
        setBirthdate(response.data.dataNascimento)
        setSex(response.data.sexo)
        setEmail(response.data.email)
      })
      .catch((e) => {
        toast.error(e.response.data);
      });
  }, []);

  const user = {
    nome: name,
    dataNascimento: birthdate,
    sexo: sex,
    telefone: telephone
  }
  
  function patchUser(e) {
    e.preventDefault();

    if (actionView === "senha") {
      if (password !== passwordConfirm)
        return toast.error("As senhas não são idênticas.");

      UserService.patchPassword(sessionStorage.patientId ?? sessionStorage.doctorId, password)
        .then(e => {
          toast.success("Senha atualizada com sucesso.");
        })
        .catch((e) => {
          toast.error(e.response.data);
        });
    }

    else if (actionView === "dados") {
      if (sessionStorage.patientId) {
        PatientService.patchPatient(sessionStorage.patientId, { ...user, cidade: city, estado: state })
          .then(e => {
            toast.success("Dados atualizados com sucesso.");
          })
          .catch((e) => {
            toast.error(e.response.data);
          });
      }
      else if (sessionStorage.doctorId) {
        DoctorService.patchDoctor(sessionStorage.doctorId, user)
          .then(e => {
            toast.success("Dados atualizados com sucesso.");
          })
          .catch((e) => {
            toast.error(e.response.data);
          });
      }
    }
  }

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
              <form onSubmit={patchUser} className="col-12">
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
                            type={"text"}
                            value={name}
                            onInput={(e) => setName(e.target.value)}
                          />
                          <FormInput
                            label={"CPF"}
                            type={"text"}
                            disabled={true}
                            value={cpf}
                          />
                          <FormInput
                            id={"phone"}
                            label={"Telefone"}
                            type={"tel"}
                            maxlength={12}
                            value={telephone}
                            onInput={(e) => setTelephone(e.target.value)}
                          />
                          {sessionStorage.patientId && (
                            <FormInput
                              id={"cidade"}
                              label={"Cidade"}
                              value={city}
                              onInput={(e) => setCity(e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-8 col-lg-5 col-xl-4">
                        <div className="user-data mt-0 mt-lg-4">
                          <FormInput
                            label={"Data de nascimento"}
                            min={"1900-01-01"}
                            max={"2300-01-01"}
                            type={"date"}
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                          />
                          <FormInput
                            label={"Sexo"}
                            type={"sex"}
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                          />
                          <FormInput
                            id={"email"}
                            label={"Email"}
                            type={"mail"}
                            value={email}
                            disabled={true}
                          />
                          {sessionStorage.patientId && (
                            <FormInput
                              id={"estado"}
                              label={"Estado"}
                              type={"state"}
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-8 col-lg-5 col-xl-4">
                        <div className="user-data mt-4">
                          <FormInput
                            label={"Senha"}
                            type={"password"}
                            value={password}
                            onInput={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-8 col-lg-5 col-xl-4">
                        <div className="user-data mt-4">
                          <FormInput
                            label={"Confirmar senha"}
                            type={"password"}
                            value={passwordConfirm}
                            onInput={(e) => setPasswordConfirm(e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <button type="submit" id="submit-button" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 pt-4 pt-md-0">
          <FinishingSide
            icon="fa-solid fa-user-plus"
            action="Finalizar"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
