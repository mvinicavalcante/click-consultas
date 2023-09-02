import { useState } from "react";
import FormInput from "../../form/formInput";
import FinishingSide from "../../finishingSide";
import TimeBox from "../../timeBox";

const ScheduleDetails = ({type}) => {
  const [especialidade, setEspecialidade] = useState();
  const [endereco, setEndereco] = useState();
  const [tipoConsulta, setTipoConsulta] = useState();
  const [planosAtendidos, setPlanosAtendidos] = useState();
  const [valorConsulta, setValorConsulta] = useState();
  const [telefone, setTelefone] = useState();

  const horarios = [
    {
      id : "1",
      diaSemana: "Segunda-Feira",
      horarioInicio: "08:00",
      horarioFim: "12:00",
    },
    {
      id : "2",
      diaSemana: "Quarta-Feira",
      horarioInicio: "14:00",
      horarioFim: "19:00",
    },{
      id : "3",
      diaSemana: "Quinta-Feira",
      horarioInicio: "14:00",
      horarioFim: "19:00",
    }
  ]

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <div className="row px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-center">
            <div className="col-8 col-md-6 pt-3 pt-md-0">
              <FormInput
                label={"Especialidade"}
                type={"specialty"}
                onChange={(e) => setEspecialidade(e.target.value)}
                value={especialidade}
              />
              <FormInput
                label={"Endereços"}
                onChange={(e) => setEndereco(e.target.value)}
                value={endereco}
              />
              <FormInput
                label={"Tipo de Consulta"} 
                onChange={(e) => setTipoConsulta(e.target.value)}
                value={tipoConsulta}
              />
            </div>

            <div className="col-8 col-md-6">
              <FormInput
                label={"Planos atendidos"}
                onChange={(e) => setPlanosAtendidos(e.target.value)}
                value={planosAtendidos}
              />
              <FormInput
                label={"Valor da Consulta"}
                onChange={(e) => setValorConsulta(e.target.value)}
                value={valorConsulta}
              />
              <FormInput
                label={"Telefone p/ contato"}
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
              />
            </div>
            <div className="m-5">
              <TimeBox content={horarios}/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center pt-3 pt-md-0">
          <FinishingSide icon="fa-solid fa-book-medical" path="/principal/agendas" action={type} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;