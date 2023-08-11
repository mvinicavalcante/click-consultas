import clickConsultas from "../../assets/clickConsultas.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Header = () => {
  function redirectToPage() {
    window.location.href = '/perfil'
  }

  return (
    <header>
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="col-3 col-lg-4">
            <img src={clickConsultas} className="logo" width={100} alt="logo" />
          </div>
          <div className="col-4 col-lg-4 d-flex justify-content-center">R$ 1.000</div>
          <div className="col-5 col-lg-4 profile d-flex justify-content-lg-end">
            <div onClick={redirectToPage}>
              <label className="px-3">Meu perfil</label>
              <FontAwesomeIcon icon={faCircleUser} size="xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
