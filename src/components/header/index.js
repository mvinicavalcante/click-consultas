import clickConsultas from "../../assets/clickConsultas.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBars,
  faXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import { useState } from "react";

const Header = () => {
  const [viewLogout, setViewLogout] = useState(false);
  const [viewMenuMobile, setViewMenuMobile] = useState(false);

  function redirectToPage(action) {
    if (action === "meu-perfil") window.location.href = "/perfil";
    else {
      //removeItem(token)
      window.location.href = "/login";
    }
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
              R$ 1.000
            </div>
            <div
              id="meu-perfil"
              onClick={() => redirectToPage("meu-perfil")}
              className="col-5 col-lg-4 profile d-flex justify-content-lg-end"
            >
              <div onMouseOver={() => setViewLogout(true)}>
                <label className="px-3">Meu perfil</label>
                <FontAwesomeIcon icon={faCircleUser} size="xl" />
                {viewLogout && (
                  <div
                    onMouseLeave={() => {
                      setViewLogout(false);
                    }}
                    className="view-logout"
                  >
                    <label onClick={() => redirectToPage("logout")}>
                      Sair{" "}
                      <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
                    </label>
                  </div>
                )}
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
          <div className="container">
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
                <li className="li-menu-mobile">
                  <label
                    className="p-2 label-menu-mobile"
                    onClick={() => redirectToPage("logout")}
                  >
                    Sair <FontAwesomeIcon icon={faRightFromBracket} size="md" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
