import React, { useState } from "react";
import FormInput from "../formInput";
import "./styles.css";

const FormBoxLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logarUsuario() {
    if (!email.includes("@")) {
      alert("Digite um e-mail válido!");
      return;
    }
    if (email === "" || senha === "") {
      alert("Os campos não podem ser vazios!");
      return;
    }
    alert(email + "\n" + senha);
    return;
  }

  return (
    <div className="form-box p-4">
      <div className="pt-1"></div>
      <FormInput
        label={"E-mail"}
        type={"email"}
        placeholder={"exemplo@exemplo.com"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <div className="pt-4"></div>
      <FormInput
        label={"Senha"}
        type={"password"}
        placeholder={"Senha"}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <div className="text-end mt-2">
        <a href="redefine-senha" className="forgot-password">
          Esqueci minha senha
        </a>
      </div>

      <div className="text-center mt-5">
        <button className="form-button" onClick={logarUsuario}>
          Entrar
        </button>
        <p className="mt-3">
          Não tem uma conta?{" "}
          <a href="cadastro" className="text-uppercase">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormBoxLogin;
