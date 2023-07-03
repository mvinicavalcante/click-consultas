import Logo from "../../assets/logo.png";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex justify-content-start align-items-center">
          <div className="col-4">
            <img src={Logo} className="logo" width={80} />
          </div>
          <div className="col-3">Ex1</div>
          <div className="col-3">Ex2</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
