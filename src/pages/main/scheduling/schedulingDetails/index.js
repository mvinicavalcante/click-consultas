import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import CustomButton from "../../../../components/customButton";
import SchedulingService from "../../../../services/SchedulingService";
import { toast } from "react-toastify";

const SchedulingDetails = () => {
  const { schedulingId } = useParams();
  const [scheduling, setScheduling] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    SchedulingService.getById(schedulingId)
      .then(e => {
        setScheduling(e.data)
      })
      .catch(e => {
        navigate("/principal/agendamentos");
        toast.error("O agendamento não foi encontrado.");
      })
  }, [schedulingId, navigate]);

  function deleteScheduling(e) {
    e.preventDefault();
    SchedulingService.deleteScheduling(schedulingId)
      .then(e => {
        toast.success(e.data);
        navigate(-1);
      })
      .catch(e => {
        toast.error(e.response.data)
      })
  }

  return (
    <div className="p-0 overflow-hidden">
      <Header />
      <div className="container scheduling d-flex flex-column">
        <>
          <div className="scheduling-title mb-3">
            <h3>Consulta Agendada</h3>
          </div>
          {scheduling && (
            <>
              {sessionStorage.doctorId ? (
                <div className="details">
                  <h4>{scheduling.paciente.nome}</h4>
                  <div className="details-column">
                    <div className="detail-column">
                      <div>
                        <p className="details-text">{scheduling.tipoConsulta}</p>
                      </div>
                      <div>
                        <p className="details-text">Informações Adicionais:</p>
                        <div>
                          <p className="details-description">{scheduling.detalhamento}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="details-text">{scheduling.localConsulta.apelido}</p>
                        <div>
                          <p className="details-description">{scheduling.agenda.contato}</p>
                          <p className="details-description">{scheduling.localConsulta.logradouro}, {scheduling.localConsulta.numero}</p>
                          <p className="details-description">{scheduling.localConsulta.cidade}, {scheduling.localConsulta.estado}</p>
                          <p className="details-description">{scheduling.horarioAgendado.data}, {scheduling.horarioAgendado.hora}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="details-text">Valor da consulta:</p>
                        <div className="details-description">
                          <h4>R$ {scheduling.valorFinalConsulta}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={deleteScheduling} className="cancel-button">
                    <CustomButton
                      type={"submit"}
                      action="Cancelar consulta"
                      bgColor="red"
                    />
                  </form>
                </div>
              ) : (
                <div className="details">
                  <h4>{scheduling.agenda.medico.nome}</h4>
                  <div className="details-column">
                    <div className="doctor-container">
                      <div>
                        <p className="details-text">{scheduling.localConsulta.apelido}</p>
                        <div>
                          <p className="details-description">{scheduling.agenda.contato}</p>
                          <p className="details-description">{scheduling.localConsulta.logradouro}, {scheduling.localConsulta.numero}</p>
                          <p className="details-description">{scheduling.localConsulta.cidade}, {scheduling.localConsulta.estado}</p>
                          <p className="details-description">{scheduling.horarioAgendado.data}, {scheduling.horarioAgendado.hora}</p>
                        </div>
                      </div>
                    </div>
                    <div className="detail-column">
                      <div>
                        <p className="details-text">{scheduling.tipoConsulta}</p>
                      </div>
                      <div>
                        <p className="details-text">Informações Adicionais:</p>
                        <div>
                          <p className="details-description">{scheduling.detalhamento}</p>
                        </div>
                      </div>
                    </div>
                    <div className="detail-column">
                      <div>
                        <p className="details-text">Valor da consulta:</p>
                        <div className="details-description">
                          <h4>R$ {scheduling.valorFinalConsulta}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={deleteScheduling} className="cancel-button">
                    <CustomButton
                      type={"submit"}
                      action="Cancelar consulta"
                      bgColor="red"
                    />
                  </form>
                </div>
              )}
            </>
          )}
        </>
      </div>
      <Footer />
    </div>
  );
};

export default SchedulingDetails;
