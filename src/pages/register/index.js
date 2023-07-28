import React from "react";
import Logo from "../../assets/Click Consultas.png";
import PictureBox from "../../components/pictureBox";

import "./styles.css";

const Register = () => {
  return (
    <div className="row align-items-center justify-content-center mr-5">
      <div className="col-md-6 col-sm-12">
        <div className="color-container">
          <div className="logo-box">
            <img src={Logo} className="img-fluid" alt="Logo" />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        {/* Centralize as PictureBox dentro da col */}
        <div className="d-flex justify-content-center">
          <div className="icons-container">
            <div className="d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <PictureBox type={"doctor"} />
                </div>
                <div className="col-md-6 col-sm-12">
                  <PictureBox type={"patient"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
