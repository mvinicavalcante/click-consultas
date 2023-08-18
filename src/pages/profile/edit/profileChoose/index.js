import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

import MenuItem from "../../../../components/menuItem";

const ProfileChoose = () => {
  return (
    <div className="container-fluid vh-100 vw-100 justify-content-center align-items-center">
      <div className="overflow-auto row vh-100">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 my-3 m-md-0 d-flex justify-content-center">
            <FontAwesomeIcon
              icon={faUserPen}
              color="#1E3050"
              className="icon"
            />
          </div>
        </div>

        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <div className="row px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-center">
            <div className="col-8 col-md-6 pt-3 pt-md-0">
              <MenuItem
                title="Dados pessoais"
                icon="fa-solid fa-user-pen"
                path="/perfil/editar"
              />
            </div>

            <div className="col-8 col-md-6 d-flex flex-column-reverse flex-md-column">
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
  );
};

export default ProfileChoose;
