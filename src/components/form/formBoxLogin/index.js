import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../formInput";
import RedefinePasswordModal from "../../modal/redefinePassword";
import PatientService from "../../../services/PatientService";
import DoctorService from "../../../services/DoctorService";

const FormBoxLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    PatientService.login({ email, senha: password })
      .then((e) => {
        sessionStorage.setItem("patientId", e.data.id);
        navigate("/principal");
      })
      .catch((e) => {
        DoctorService.login({ email, senha: password })
          .then(e => {
            sessionStorage.setItem("doctorId", e.data.id);
            navigate("/principal");
          })
          .catch((e) => {
            toast.error(e.response.data)
          });
      });
  }

  return (
    <div>
    <form onSubmit={login} className="form-box p-4">
      <FormInput
        label={"E-mail"}
        type={"email"}
        placeholder={"exemplo@exemplo.com"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        classNameGroup={"pt-1 m-0"}
      />
      <FormInput
        label={"Senha"}
        type={"password"}
        placeholder={"Senha"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        classNameGroup={"pt-4 m-0"}
      />
      <div className="text-end mt-2">
        <span className="forgot-password" onClick={() => setModalShow(true)}>
          Esqueci minha senha
        </span>
      </div>

      <div className="text-center mt-5">
        <button className="form-button" type="submit">
          Entrar
        </button>
        <p className="mt-3">
          Não tem uma conta?{" "}
          <a href="cadastro" className="text-uppercase">
            Cadastre-se
          </a>
        </p>
      </div>
    </form>
    <RedefinePasswordModal
      show={modalShow}
      onHide={() => { setModalShow(false)}}
    />
    </div>
  );
};

export default FormBoxLogin;
