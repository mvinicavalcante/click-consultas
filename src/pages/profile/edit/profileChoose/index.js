import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../../../../components/menuItem";

const ProfileChoose = () => {
  return (
    <div className="container-fluid vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faUserPen} size="8x" color="#1E3050" />
        </div>
        <div className="col-logo col-12 col-lg-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Editar Perfil</h2>
            </div>
            <div className="col-12 m-0 gy-4 gy-md-0 gx-5 row align-items-end align-items-lg-center justify-content-center">
              <div className="col-8 col-md-5 col-lg-4 col-xl-3 pt-3 pt-md-0">
                <MenuItem
                  title="Dados pessoais"
                  icon="fa-solid fa-user-pen"
                  path="/perfil/editar"
                />
              </div>
              <div className="col-8 col-md-5 col-lg-4 col-xl-3">
                <MenuItem
                  title="Dados profissionais"
                  icon="fa-solid fa-user-doctor"
                  path="/perfil/editar-profissional"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChoose;
