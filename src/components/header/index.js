import "./styles.css";
import clickConsultas from "../../assets/clickConsultas.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import UserService from "../../services/UserService";

const Header = () => {
  const [viewMenuMobile, setViewMenuMobile] = useState(false);
  const [carteira, setCarteira] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getWalletById(sessionStorage.doctorId ?? sessionStorage.patientId)
      .then(e => {
        setCarteira(e.data);
      })
      .catch(e => {
      });
  }, []);

  function redirectToPage(action) {
    if (action === "meu-perfil")
      navigate("/perfil");
  }

  return (
    <>
      <header className="header-desktop">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="col-3 col-lg-4">
              <img
                src={clickConsultas}
                className="logo"
                width={100}
                alt="logo"
              />
            </div>
            <div
              id="balance-value"
              className="col-4 col-lg-4 d-flex justify-content-center balance"
            >
              {`R$ ${carteira?.saldo.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
            </div>
            <div
              id="meu-perfil"
              onClick={() => redirectToPage("meu-perfil")}
              className="col-5 col-lg-4 profile d-flex justify-content-lg-end"
            >
              <div>
                <label className="px-3 profile">Meu perfil</label>
                <FontAwesomeIcon icon={faCircleUser} size="xl" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-mobile">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <FontAwesomeIcon
                onClick={() => setViewMenuMobile(true)}
                icon={faBars}
                size="lg"
              />
            </div>
            <div
              id="balance-value"
              className="col-4 col-lg-4 d-flex justify-content-center balance"
            >
              R$ 1.000
            </div>
            <div className="col-3 col-lg-4">
              <img
                src={clickConsultas}
                className="logo"
                width={100}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </header>
      {viewMenuMobile && (
        <div className="menu-mobile p-3">
          <div className="d-flex align-items-center">
            <div>
              <FontAwesomeIcon
                onClick={(e) => setViewMenuMobile(!e)}
                icon={faXmark}
                size="lg"
              />
            </div>
          </div>
          <div className="mt-5">
            <ul className="list-mobile">
              <li
                className="li-menu-mobile"
                onClick={() => redirectToPage("meu-perfil")}
              >
                <label className="p-2 label-menu-mobile">
                  Meu perfil <FontAwesomeIcon icon={faCircleUser} size="md" />
                </label>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
