import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/form/formInput";
import FinishingSide from "../../../components/finishingSide";
import DoctorService from "../../../services/DoctorService";
import { toast } from "react-toastify";

const DoctorSecondPage = () => {
  const [crmNumber, setCrmNumber] = useState("");
  const [crmUf, setCrmUf] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [specialityRQE, setSpecialityRQE] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [identificationPhoto, setIdentificationPhoto] = useState("");
  const doctorId = sessionStorage.doctorId;
  const navigate = useNavigate();

  const crm = {
    numero: crmNumber,
    uf: crmUf
  };

  const especialidade = {
    nome: speciality,
    numeroRQE: specialityRQE
  };

  const handlePhotoInput = (photo) => {
    if (photo) {
      const formData = new FormData();
      formData.append('foto', photo);
      setProfilePhoto(formData);
    } else
      setProfilePhoto(null);
  };

  function formSubmit(e) {
    e.preventDefault();

    if (profilePhoto !== null) {
      DoctorService.registerProfilePhoto(sessionStorage.doctorId, profilePhoto)
        .then()
        .catch((e) => {
          toast.error(e.response.data);
        });
    }

    DoctorService.registerCRM(doctorId, crm)
      .then()
      .catch((e) => {
        toast.error(e.response.data);
      });

    DoctorService.registerSpecialty(doctorId, especialidade)
      .then()
      .catch((e) => {
        toast.error(e.response.data);
      });

    navigate("/aguarda-confirmacao");
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <form onSubmit={formSubmit} className="row px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-center">
            <div className="col-8 col-md-6 pt-3 pt-md-0">
              <FormInput
                label={"CRM"}
                onChange={(e) => setCrmNumber(e.target.value)}
                value={crmNumber}
              />
              <FormInput
                label={"Especialidade"}
                type={"specialty"}
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
              />
              <FormInput
                label={"Foto de Perfil"}
                type={"file"}
                onChange={(e) => handlePhotoInput(e.target.files[0])}
                required={false}
              />
            </div>

            <div className="col-8 col-md-6">
              <FormInput
                label={"UF"}
                type={"state"}
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
                required={false}
              />
            </div>
            <button type="submit" id="submit-button" />
          </form>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center pt-3 pt-md-0">
          <FinishingSide icon="fa-solid fa-user-doctor" action="Finalizar" />
        </div>
      </div>
    </div>
  );
};

export default DoctorSecondPage;