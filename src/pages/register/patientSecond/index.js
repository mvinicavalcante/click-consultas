import { useState } from "react";
import FormInput from "../../../components/form/formInput";
import FinishingSide from "../../../components/finishingSide";

import "./styles.css";

const PatientSecondPage = () => {
  const [institute, setInstitute] = useState();
  const [number, setNumber] = useState();
  const [noHealthPlanChecked, setNoHealthPlanChecked] = useState(false);

  const handleNoHealthPlanChange = () => {
    setNoHealthPlanChecked(prevState => !prevState);
  };

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12">
                <FormInput
                  label={"Instituição"}
                  onChange={(e) => setInstitute(e.target.value)}
                  value={institute}
                  disabled={noHealthPlanChecked}
                />
                <FormInput
                  label={"Número"}
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  disabled={noHealthPlanChecked}
                />
            </div>
            <div className="col-12">
              <input
                type="checkbox"
                className="form-check-input"
                id="noHealthPlan"
                checked={noHealthPlanChecked}
                onChange={handleNoHealthPlanChange}
              />
              <label className="no-plan mx-2">Não tenho plano de saúde</label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <FinishingSide type={"patient"} />
        </div>
      </div>
    </div>
  );
};

export default PatientSecondPage;