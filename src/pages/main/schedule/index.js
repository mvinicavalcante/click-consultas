import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookMedical, faPlus
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import ScheduleBox from "../../../components/scheduleBox";

const SchedulePage = ({ type }) => {
 
  const userDefault = {
    tipo: "medico",
    nome: "João da Silva",
    cpf: "000.000.000-00",
    dataNascimento: "01/01/2000",
    sexo: "Masculino",
    email: "teste@ufape.com.br",
    telefone: "(00) 00000-0000",
    cidade: "Garanhuns",
    estado: "Pernambuco",
    senha: "123456",
  };

  const [arrayAgendas, setArrayAgendas] = useState([
    {
      id: 1,
      especialidade: "Especialidade",
      local: "Clinica Solar",
      valor: "R$ 400"
    },
    {
      id: 2,
      especialidade: "Especialidade",
      local: "Clinica Lunar",
      valor: "R$ 450"
    },
    {
      id: 3,
      especialidade: "Especialidade",
      local: "Clinica Solar",
      valor: "R$ 320"
    },
    {
      id: 4,
      especialidade: "Especialidade",
      local: "Clinica Lunar",
      valor: "R$ 290"
    },
    {
      id: 5,
      especialidade: "Especialidade",
      local: "Clinica Lunar",
      valor: "R$ 560"
    }
  ])

  const handleDeleteComponente = (id) => {
    const novoArray = arrayAgendas.filter(comp => comp.id !== id);
    setArrayAgendas(novoArray);
  };

  return (
    <>
      <div className="schedule">
        {userDefault.tipo === "medico" ? (
            <div className="container-fluid vh-100 vw-100 justify-content-center align-items-center">
              <div id="content" className="overflow-auto row vh-100">
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="col-12 col-md-6 my-3 m-md-0 d-flex justify-content-center">
                      <FontAwesomeIcon
                        icon={faBookMedical}
                        color="#1E3050"
                        className="icon"
                      />
                  </div>
                </div>
                <div className="col-logo col-12 col-lg-8">
                  <div className="col-12 pt-5">
                    <h2 className="text-center">
                      Agenda
                    </h2>
                  </div>
                  <div className="schedule-details">
                    <div className="add-schedule col-12 mt-3 text-left">
                      <button onClick={() => window.location.href="/principal/agendas/criar"} className="add-schedule">
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
                          <ScheduleBox id={agenda.id} content={agenda} onDelete={handleDeleteComponente}/>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


        ) :  (
          <></>
        )}
      </div>
    </>
  );
}

export default SchedulePage;
