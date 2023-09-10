import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookMedical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import ScheduleBox from "../../../components/schedule/scheduleBox";
import BackIcon from "../../../components/backIcon";
import ScheduleService from "../../../services/ScheduleService";

const SchedulePage = ({ type }) => {
  const doctorId = sessionStorage.doctorId;
  const [arrayAgendas, setArrayAgendas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ScheduleService.getAllByDoctorId(doctorId)
      .then(e => {
        setArrayAgendas(e.data)
      })
      .catch(e => {
        console.error(e.response.data)
      });
  }, [doctorId]);

  const handleDeleteComponente = (id) => {
    ScheduleService.deleteSchedule(id)
      .then(e => {
        toast.success(e.data)
      })
      .catch(e => {
        toast.error(e.response.data)
      });

    const novoArray = arrayAgendas.filter(comp => comp.id !== id);
    setArrayAgendas(novoArray);
  };

  return (
    <>
      <div className="schedule">
        <div className="container-fluid vh-100 vw-100 justify-content-center align-items-center">
          <div id="content" className="overflow-auto row vh-100">
            <div className="col-12 col-lg-4 py-5 d-flex justify-content-center align-items-center position-relative">
              <BackIcon />
              <FontAwesomeIcon
                icon={faBookMedical}
                color="#1E3050"
                size="8x"
                className="icon"
              />
            </div>
            <div className="col-logo col-12 col-lg-8">
              <div className="col-12 pt-5">
                <h2 className="text-center">
                  Agenda
                </h2>
              </div>
              <div className="schedule-details">
                <div className="add-schedule col-12 mt-3 text-left">
                  <button onClick={() => navigate("/principal/agendas/criar")} className="add-schedule">
                    <FontAwesomeIcon
                      icon={faPlus}
                      color="white"
                      className="icon"
                      width={65}
                    />
                  </button>
                </div>
                <div className="col-12 mt-4">
                  <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {arrayAgendas.map((agenda, index) => (
                      <div key={index} className="col">
                        <ScheduleBox id={agenda.id} content={agenda} onDelete={handleDeleteComponente} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchedulePage;
