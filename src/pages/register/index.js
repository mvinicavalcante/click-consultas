import React from "react";
import Logo from "../../assets/logo.png";

import PictureBox from "../../components/pictureBox";

import "./styles.css";

const Register = () => {
  return (
    <div class="container-fluid vh-100 vw-100 overflow-auto">
      <div class="row vh-100">
        <div className="col-logo col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={Logo} className="img-fluid rounded-4 col-4 col-md-7" alt="Logo" />
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className="row g-4 g-xl-5">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <PictureBox type={"medico"} />
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <PictureBox type={"paciente"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
