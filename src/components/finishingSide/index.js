import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserDoctor, faUserPlus, faCheck, faBookMedical, faHouseMedical } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

library.add(faUserDoctor, faUserPlus, faCheck, faBookMedical, faHouseMedical);

function activateFormButtonInParentComponent() {
  let button = document.getElementById("submit-button"); 
  button.click();
}

const FinishingSide = ({ icon, action }) => {
  return (
    <>
      <div className="user-icon d-flex align-items-end justify-content-center">
        <FontAwesomeIcon icon={icon} color="#1E3050" className="icon" />
      </div>
      <div className="finalize d-flex align-items-end justify-content-center">
        <div className="d-flex" onClick={activateFormButtonInParentComponent}>
          <p>{action}</p>
          <p><FontAwesomeIcon icon={faCheck} /></p>
        </div>
      </div>
    </>
  );
};

export default FinishingSide;