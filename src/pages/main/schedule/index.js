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
      tiposConsulta: "Primeira Consulta",
      planosAtendidos: "Amil, Unimed",
      horaInicio: "10:00",
      horaFim: "18:00",
      valor: "R$ 400"
    },
    {
      "id": 2,
      "especialidade": "Cardiologia",
      "local": "CardioSaúde",
      "tiposConsulta": "Acompanhamento",
      "planosAtendidos": "Bradesco Saúde",
      "horaInicio": "09:30",
      "horaFim": "16:30",
      "valor": "R$ 350"
    },
    {
      "id": 3,
      "especialidade": "Dermatologia",
      "local": "Dermacare Center",
      "tiposConsulta": "Check-up",
      "planosAtendidos": "SulAmérica",
      "horaInicio": "11:00",
      "horaFim": "19:00",
      "valor": "R$ 280"
    },
    {
      "id": 4,
      "especialidade": "Ortopedia",
      "local": "OrthoClinic",
      "tiposConsulta": "Lesões Esportivas",
      "planosAtendidos": "Golden Cross, Bradesco Saúde",
      "horaInicio": "08:45",
      "horaFim": "17:15",
      "valor": "R$ 450"
    },
    {
      "id": 5,
      "especialidade": "Ginecologia",
      "local": "GynaCare",
      "tiposConsulta": "Rotina",
      "planosAtendidos": "Amil",
      "horaInicio": "12:30",
      "horaFim": "20:30",
      "valor": "R$ 320"
    },
    {
      "id": 6,
      "especialidade": "Oftalmologia",
      "local": "Visão Clara",
      "tiposConsulta": "Exame de Vista",
      "planosAtendidos": "Unimed",
      "horaInicio": "14:15",
      "horaFim": "21:15",
      "valor": "R$ 280"
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