import React from "react";
import Logo from "../../assets/logo.png";
import FormBoxLogin from "../../components/formBoxLogin";

import "./styles.css";

const Login = () => {
  return (
    <div className="container login-container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 col-sm-12 align-middle">
          <img src={Logo} className="img-fluid logo" alt="Logo" />
        </div>
        <div className="col-md-6 col-sm-12">
          <FormBoxLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
