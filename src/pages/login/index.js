import React from "react";
import Logo from "../../assets/clickConsultas.png";
import FormBoxLogin from "../../components/form/formBoxLogin";

const Login = () => {
  return (
    <div className="d-flex align-items-center" style={{height: "95vh"}}>
      <div className="container overflow-auto">
        <div className="row align-items-center justify-content-center px-3 px-lg-0 gy-5">
          <div className="col-8 col-lg-6">
            <img src={Logo} className="img-fluid logo" alt="Logo" />
          </div>
          <div className="col-12 col-lg-6">
            <FormBoxLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
