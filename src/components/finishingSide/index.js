import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faUserPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const FinishingSide = ({ type }) => {
  return (
    <>
      <div className="user-icon d-flex align-items-end justify-content-center">
        {type === "patient" ?
          <FontAwesomeIcon icon={faUserPlus} color="#1E3050" className="icon" />
          :
          <FontAwesomeIcon icon={faUserDoctor} color="#1E3050" className="icon" />
        }
      </div>
      <div className="finalize d-flex align-items-end justify-content-center">
        <p>Finalizar</p>
        <p><FontAwesomeIcon icon={faCheck} /></p>
      </div>
    </>
  );
};


export default FinishingSide;