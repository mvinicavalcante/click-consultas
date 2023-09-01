import "./styles.css";
import BoxContent from "../../../../components/boxContent";
import DoctorService from "../../../../services/DoctorService";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ProfileProfessional = () => {
  const [crms, setCrms] = useState([]);
  const [specialtys, setSpecialtys] = useState([]);
  const doctorId = sessionStorage.doctorId;

  useEffect(() => {
    DoctorService.getAllCRMByDoctorId(doctorId)
      .then(e => {
        setCrms(e.data)
      })
      .catch((e) => {
        console.error(e.response.data);
      });

    DoctorService.getAllSpecialtysByDoctorId(doctorId)
      .then(e => {
        setSpecialtys(e.data)
      })
      .catch((e) => {
        console.error(e.response.data);
      });
  }, [doctorId]);

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
