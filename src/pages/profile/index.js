import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../../components/menuItem";

import "./styles.css";

const Profile = () => {
  return (
    <div className="container-fluid vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faUser} size="8x" color="#1E3050" />
        </div>

        <div className="col-logo col-12 col-lg-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Meu Perfil</h2>
            </div>
            <div className="col-12 m-0 gy-4 gy-md-0 gx-5 row align-items-end align-items-xl-center justify-content-center">
              <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                {sessionStorage.doctorId ? (
                  <MenuItem
                    title="Editar Perfil"
                    icon="fa-solid fa-user-pen"
                    path="/perfil/escolher-perfis"
                  />
                ) : (
                  <MenuItem
                    title="Editar Perfil"
                    icon="fa-solid fa-user-pen"
                    path="/perfil/editar"
                  />
                )}
              </div>
              <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                <MenuItem
                  title="Carteira"
                  icon="fa-solid fa-wallet"
                  path="/perfil/carteira"
                />
              </div>
              <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                <MenuItem
                  title="Histórico"
                  icon="fa-solid fa-clock-rotate-left"
                  path="/perfil/historico"
                />
              </div>
              <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                <MenuItem
                  title="Sair"
                  icon="fa-solid fa-right-from-bracket"
                  path="/sair"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
