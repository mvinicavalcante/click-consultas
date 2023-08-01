import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const PictureBox = ({ type }) => {
  function redirectToPage() {
    if (type === "medico") {
      window.location.href = "/cadastro/medico";
    } else {
      window.location.href = "/cadastro/paciente";
    }
  }

  return (
    <button className="rounded-4 py-3 px-4 py-xl-4 px-xl-5" onClick={redirectToPage}>
      <div className="d-flex flex-column align-items-center">
        {type === "medico" ? (
          <>
            <FontAwesomeIcon icon={faUserDoctor} color="#1E3050" className="icon" />
            <p className="mt-3 mb-0">Sou médico</p>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faUserPlus} color="#1E3050" className="icon" />
            <p className="mt-3 mb-0">Sou paciente</p>
          </>
        )}
      </div>
    </button>
  );
};

export default PictureBox;
