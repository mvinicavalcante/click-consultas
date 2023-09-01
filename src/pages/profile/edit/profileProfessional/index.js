import "./styles.css";

import BoxContent from "../../../../components/boxContent";
import DoctorService from "../../../../services/DoctorService";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const doctorId = sessionStorage.doctorId;
let crms, specialtys;

await DoctorService.getAllCRMByDoctorId(doctorId)
  .then(response => {
    crms = response.data
  })
  .catch((e) => {
    console.error(e.response.data);
  });

await DoctorService.getAllSpecialtysByDoctorId(doctorId)
  .then(response => {
    specialtys = response.data
  })
  .catch((e) => {
    console.error(e.response.data);
  });

const ProfileProfessional = () => {
  return (
    <div className="container-fluid vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Dados Profissionais</h2>
            </div>
            <div className="row justify-content-evenly m-0">
              <div className="col-8 col-md-6 col-lg-5 col-xl-4 my-5 my-md-0">
                <div className="user-data">
                  <BoxContent
                    title={"CRM"}
                    type={"crm"}
                    content={crms}
                  />
                </div>
              </div>
              <div className="col-8 col-md-6 col-lg-5 col-xl-4 mb-5 mb-md-0">
                <div className="user-data">
                  <BoxContent
                    title={"Especialidades"}
                    type={"speciality"}
                    content={specialtys}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center py-4">
          <FontAwesomeIcon icon={faUserPen} size="8x" color="#1E3050" />
        </div>
      </div>
    </div>
  );
};

export default ProfileProfessional;
