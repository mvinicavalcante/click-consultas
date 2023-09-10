import "./styles.css";
import Header from "../../../components/header";
import { useEffect, useState } from "react";
import CustomButton from "../../../components/customButton";
import SchedulingService from "../../../services/SchedulingService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ConfirmConsultation = () => {
  const [medico, setMedico] = useState();
  const [agenda, setAgenda] = useState();
  const [tipoConsulta, setTipoConsulta] = useState();
  const [planosAtendidos, setPlanosAtendidos] = useState([]);
  const [planoDeSaude, setPlanoDeSaude] = useState();
  const [dataConsulta, setDataConsulta] = useState();
  const [indexDataConsulta, setIndexDataConsulta] = useState();
  const [horaConsulta, setHoraConsulta] = useState();
  const [detalhamento, setDetalhamento] = useState();
  const navigate = useNavigate()

  const agendamento = {
    tipoConsulta,
    planoDeSaude,
    valorFinalConsulta: agenda?.valorConsulta,
    detalhamento,
    agenda: { id: agenda?.id },
    paciente: { id: sessionStorage.patientId },
    localConsulta: { id: agenda?.enderecoMedico.id },
    horarioAgendado: {
      data: dataConsulta,
      hora: horaConsulta
    }
  }

  useEffect(() => {
    const medicoFromSession = sessionStorage.medicoSelecionado;
    if (medicoFromSession) {
      const parsedMedico = JSON.parse(medicoFromSession);
      setMedico(parsedMedico);
    }

    const agenda = sessionStorage.agendaSelecionada;
    if (agenda) {
      const parsedAgenda = JSON.parse(agenda);
      setAgenda(parsedAgenda);
    }

    SchedulingService.checkHealtyPlanInSchedule(sessionStorage.patientId, JSON.parse(agenda).id)
      .then(e => {
        setPlanosAtendidos(e.data)
      })
      .catch(e => { })
  }, []);

  const handleDataChange = (e) => {
    setDataConsulta(e.target.value);
    setIndexDataConsulta(e.target.selectedIndex - 1);
    setHoraConsulta("");
  };

  const handlePlanChange = (value) => {
    if (value === "nenhum")
      return setPlanoDeSaude(null);
    setPlanoDeSaude(value);
  };

  function registerScheduling(e) {
    e.preventDefault();
    SchedulingService.registerScheduling(agendamento)
      .then(e => {
        toast.success("Agendamento realizado com sucesso.");
        navigate("/principal/agendamentos")
      })
      .catch(e => {
        toast.error(e.response.data)
      })
  }

  return (
    <>
      <Header />
      <div className="container-fluid d-flex justify-content-center py-5">
        <form onSubmit={registerScheduling} className="box-confirm-consultation row gy-5 mt-3 rounded-4 form-scheduling pb-5">
          <div className="col-12 text-center">
            <img src={sessionStorage.fotoMedicoSelecionado} width={150} className="rounded-4 align-self-center" alt={"Foto do médico"} />
            <h2 className="text-white pt-3">Dr. {medico?.nome}</h2>
            <h4 className="text-white">Contato: {agenda?.contato}</h4>
          </div>
          <div className="col-12 row ms-5 col-form-scheduling">
            <div className="text-white pt-4">
              <h3 className="pb-1">Especialidade:</h3>
              <h5>{agenda?.especialidadeMedica}</h5>
            </div>
            <div className="text-white pt-4">
              <h3 className="pb-1"> Local da consulta: </h3>
              <h5>
                {agenda?.enderecoMedico.apelido},
                {" " + agenda?.enderecoMedico.logradouro},
                {" " + agenda?.enderecoMedico.numero},
                {" " + agenda?.enderecoMedico.cidade}, {agenda?.enderecoMedico.estado}
              </h5>
            </div>
            <div className="text-white pt-4">
              <h3 className="pb-1">Tipo da consulta:</h3>
              <select onChange={(e) => setTipoConsulta(e.target.value)} className="form-select" required>
                <option selected disabled value="">-- Selecione o tipo da consulta --</option>
                {agenda?.tiposConsulta.map((tipo, key) => {
                  return (
                    <option key={key} value={tipo}>
                      {tipo}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="text-white pt-4">
              <h3 className="pb-1">Data da consulta:</h3>
              <select onChange={(e) => handleDataChange(e)} className="form-select" required>
                <option selected disabled value="">-- Selecione o tipo da consulta --</option>
                {agenda?.horariosDisponiveis.map((disponivel, key) => {
                  return (
                    <option key={key} value={disponivel.data}>
                      {disponivel.data}
                    </option>
                  )
                })}
              </select>
            </div>
            {dataConsulta && (
              <div className="text-white pt-4">
                <h3 className="pb-1">Horário da consulta:</h3>
                <select onChange={(e) => setHoraConsulta(e.target.value)} className="form-select" required>
                  <option selected disabled value="">-- Selecione a hora da consulta --</option>
                  {agenda?.horariosDisponiveis[indexDataConsulta].horarios.map((hora, key) => {
                    return (
                      <option key={key} value={hora}> {hora} </option>
                    )
                  })}
                </select>
              </div>
            )}
            <div className="text-white pt-4">
              <h3 className="pb-1">Plano de saúde:</h3>
              {planosAtendidos.length > 0 ?
                (
                  <select onChange={(e) => handlePlanChange(e.target.value)} className="form-select" required>
                    <option selected disabled value="">-- Selecione o plano de saúde --</option>
                    <option value="nenhum">Não quero usar nenhum plano</option>
                    {planosAtendidos.map((plano, key) => {
                      return (
                        <option key={key} value={plano}> {plano} </option>
                      )
                    })}
                  </select>
                )
                :
                <input placeholder="Não aceita seu plano de saúde" className="form-select" disabled={true} />
              }
            </div>
            <div className="text-white pt-4">
              <h3 className="pb-1">Informações adicionais:</h3>
              <textarea className="form-control form-text-area" onChange={(e) => setDetalhamento(e.target.value)} rows="5" required />
            </div>
          </div>
          <div className="col-12 text-center">
            {planoDeSaude ? (
              <h2>Atendimento por plano de saúde</h2>
            ) : (
              <>
                <h2>Valor da consulta:</h2>
                <h2>R$ {agenda?.valorConsulta}</h2>
              </>
            )}
          </div>
          <div className="col-12 text-center">
            <CustomButton className={"m-0"} type={"submit"} bgColor={"white"} action={"Confirmar"} />
          </div>
        </form>
      </div >
    </>
  );
};

export default ConfirmConsultation;
