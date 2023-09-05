import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/form/formInput";
import PatientService from "../../../services/PatientService";
import FinishingSide from "../../../components/finishingSide";

import "./styles.css";

const PatientSecondPage = () => {
  const [institute, setInstitute] = useState("");
  const [number, setNumber] = useState("");
  const [noHealthPlanChecked, setNoHealthPlanChecked] = useState(false);
  const navigate = useNavigate();

  const plan = {
    operadora: institute,
    numero: number
  };

  function submitForm(e) {
    e.preventDefault();

    if (!noHealthPlanChecked) {
      PatientService.registerHealthPlan(sessionStorage.userId, plan)
        .then(response =>
          navigate("/principal")
        )
        .catch((e) => {
          console.error(e.response.data);
        });
    }
    else
      navigate("/principal");
  }

  const handleNoHealthPlanChange = () => {
    setNoHealthPlanChecked(prevState => !prevState);
  };

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <form onSubmit={submitForm} className="row">
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
            <button type="submit" id="submit-button" />
          </form>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <FinishingSide icon="fa-solid fa-user-plus" action="Finalizar" />
        </div>
      </div>
    </div>
  );
};

export default PatientSecondPage;