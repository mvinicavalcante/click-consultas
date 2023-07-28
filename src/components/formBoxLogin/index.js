import React, { useState } from "react";
import FormInput from "../formInput";
import "./styles.css";

const FormBox = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logarUsuario() {
    if (email === "" || senha === "") {
      alert("Preencha os campos corretamente!");
      return;
    }
    alert(email + " " + senha);
    return;
  }

  return (
    <div className="form-box">
      <FormInput
        label={"E-mail"}
        type={"email"}
        placeholder={"exemplo@exemplo.com"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormInput
        label={"Senha"}
        type={"password"}
        placeholder={"Senha"}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <a href="#" className="forgot-password">
        Esqueci minha senha
      </a>

      <div className="text-center mt-4">
        <button className="form-button" onClick={logarUsuario}>
          Entrar
        </button>
        <p className="mt-3">
          Não tem uma conta?{" "}
          <a href="/register" className="register-link">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormBox;
