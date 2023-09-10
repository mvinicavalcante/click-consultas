import React, { useEffect, useState } from "react";
import UserHistory from "../../../components/userHistory";
import AppointmentService from "../../../services/AppointmentService";

const History = () => {

  const userId = sessionStorage.doctorId ?? sessionStorage.patientId;
  const [arrayHistory, setArrayHistory] = useState()

  const userType = () => {
    if (sessionStorage.doctorId) {
      return "medico";
    } else {
      return "paciente";
    }
  };

  useEffect(() => {
    if (userType() === "medico") {
      AppointmentService.getAllByDoctorId(userId)
        .then(e => {
          setArrayHistory(e.data)
        })
        .catch(e => {
          console.error(e.response.data)
        })
    } else {
      AppointmentService.getAllByPatientId(userId)
        .then(e => {
          setArrayHistory(e.data)
        })
        .catch(e => {
          console.error(e.response.data)
        })
    }
  }, [userId])

  return (
    <>
      <UserHistory type={userType()} content={arrayHistory} />
    </>
  )
};

export default History;