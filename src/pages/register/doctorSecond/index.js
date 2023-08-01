import { useState } from "react";
import FormInput from "../../../components/form/formInput";
import FinishingSide from "../../../components/finishingSide";

const DoctorSecondPage = () => {
  const [crm, setCrm] = useState();
  const [crmUf, setCrmUf] = useState();
  const [speciality, setSpeciality] = useState();
  const [specialityRQE, setSpecialityRQE] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [identificationPhoto, setIdentificationPhoto] = useState();

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <div className="row px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-center">
            <div className="col-8 col-md-6 pt-3 pt-md-0">
              <FormInput
                label={"CRM"}
                onChange={(e) => setCrm(e.target.value)}
                value={crm}
              />
              <FormInput
                label={"Especialidade"}
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
              />
              <FormInput
                label={"Foto de Perfil"}
                type={"file"}
                onChange={(e) => setProfilePhoto(e.target.value)}
                value={profilePhoto}
              />
            </div>

            <div className="col-8 col-md-6">
              <FormInput
                label={"UF"}
                onChange={(e) => setCrmUf(e.target.value)}
                value={crmUf}
              />
              <FormInput
                label={"Nº RQE"}
                onChange={(e) => setSpecialityRQE(e.target.value)}
                value={specialityRQE}
              />
              <FormInput
                label={"Foto com Documento"}
                type={"file"}
                onChange={(e) => setIdentificationPhoto(e.target.value)}
                value={identificationPhoto}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center pt-3 pt-md-0">
          <FinishingSide type={"doctor"} />
        </div>
      </div>
    </div>
  );
};

export default DoctorSecondPage;