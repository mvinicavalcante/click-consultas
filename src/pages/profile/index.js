import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../../components/menuItem";

const Profile = () => {
  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faUser} size="8x" color="#1E3050" />
        </div>

        <div className="col-logo col-12 col-lg-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Meu Perfil</h2>
            </div>
            <div className="col-12 gy-4 gy-md-0 gx-5 row justify-content-center align-items-center">
              <div className="col-6 col-md-3 col-lg-4 col-xl-3">
                <MenuItem title="Editar Perfil" icon="fa-solid fa-user-pen" path="/edicao-perfil" />
              </div>
              <div className="col-6 col-md-3 col-lg-4 col-xl-3">
                <MenuItem title="Carteira" icon="fa-solid fa-wallet" path="/carteira" />
              </div>
              <div className="col-6 col-md-3 col-lg-4 col-xl-3">
                <MenuItem title="Histórico" icon="fa-solid fa-clock-rotate-left" path="/historico" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
