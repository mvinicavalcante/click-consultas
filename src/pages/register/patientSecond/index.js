import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../../components/form/formInput";
import { useState } from "react";

import "./styles.css";

const PatientSecondPage = () => {
  const [institute, setInstitute] = useState("");
  const [number, setNumber] = useState();
  const [noHealthPlanChecked, setNoHealthPlanChecked] = useState(false);

  const handleNoHealthPlanChange = (e) => {
    const isChecked = e.target.checked;
    setNoHealthPlanChecked(isChecked);
  };

  return (
    <div className="container-fluid vh-100 vw-100 overflow-hidden ">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <div className="row g-3 g-lg-8 ">
            {noHealthPlanChecked ? (
              <>
                <FormInput
                  id="institute"
                  label={"Instituição"}
                  type={"name"}
                  onChange={(e) => setInstitute(e.target.value)}
                  value={institute}
                  disabled={true}
                />
                <FormInput
                  id="number"
                  label={"Número"}
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  disabled={true}
                />
              </>
            ) : (
              <>
                <FormInput
                  id="institute"
                  label={"Instituição"}
                  type={"name"}
                  onChange={(e) => setInstitute(e.target.value)}
                  value={institute}
                  disabled={noHealthPlanChecked}
                />
                <FormInput
                  id="number"
                  label={"Número"}
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  disabled={noHealthPlanChecked}
                />
              </>
            )}
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="noHealthPlan"
                checked={noHealthPlanChecked}
                onChange={handleNoHealthPlanChange}
              />
              <label className="no-plan">Não tenho plano de saúde</label>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
          <FontAwesomeIcon icon={faUserPlus} className="icon" />
          <div className="next d-flex align-items-center justify-content-end pt-5">
            <label>Finalizar</label>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSecondPage;
