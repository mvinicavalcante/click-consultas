import "./styles.css";
import React, { useEffect, useState } from "react";

import Header from "../../../components/header";
import SchedulingBox from "../../../components/scheduling/schedulingBox"
import Footer from "../../../components/footer";
import SchedulingService from "../../../services/SchedulingService";

const MainSheduling = () => {
  const [agendamentos, setAgendamentos] = useState();
  const doctorId = sessionStorage.doctorId ?? null;
  const patientId = sessionStorage.patientId ?? null;

  useEffect(() => {
    if (patientId)
      SchedulingService.getAllByPatientId(patientId)
        .then(e => {
          setAgendamentos(e.data)
        })
        .catch(e => { })

    else if (doctorId)
      SchedulingService.getAllByDoctorId(doctorId)
        .then(e => {
          setAgendamentos(e.data)
        })
        .catch(e => { })

  }, [doctorId, patientId]);

  console.log(agendamentos);

  return (
    <div className="p-0 overflow-hidden">
      <Header />
      <div className="container scheduling d-flex flex-column">
        <>
          <div className="scheduling-title mb-3">
            <h3>Agendamentos</h3>
          </div>
          <div className="pt-4">
            {agendamentos?.map((agendamento, index) => (
              <div key={index} className="col mb-2">
                <SchedulingBox content={agendamento} type={doctorId ? "medico" : "paciente"} />
              </div>
            ))}
          </div>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default MainSheduling;
