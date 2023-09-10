import React, { useEffect, useState } from "react";
import UserHistory from "../../../components/userHistory";
import DoctorService from "../../../services/DoctorService";
import PatientService from "../../../services/PatientService";

const History = () => {

  const userId = sessionStorage.doctorId ?? sessionStorage.patientId;
  const [arrayHistory, setArrayHistory] = useState()

  const userType = () => {
    if (sessionStorage.doctorId !== null && sessionStorage.doctorId !== undefined) {
      return "medico";
    } else {
      return "paciente";
    }
  };

  useEffect(() => {
    if(userType() === "medico"){
      DoctorService.getHistory(userId)
        .then(e => {
          setArrayHistory(e.data)
          console.log(e.data)
        })
        .catch(e => {
          console.error(e.response.data)
        })
    } else {
      PatientService.getHistory(userId)
      .then(e => {
        setArrayHistory(e.data)
        console.log(e.data)
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