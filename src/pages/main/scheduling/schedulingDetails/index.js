import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import CustomButton from "../../../../components/customButton";
import SchedulingService from "../../../../services/SchedulingService";
import { toast } from "react-toastify";
import AppointmentService from "../../../../services/AppointmentService";

const SchedulingDetails = () => {
  const { schedulingId } = useParams();
  const [scheduling, setScheduling] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    SchedulingService.getById(schedulingId)
      .then((e) => {
        setScheduling(e.data);
      })
      .catch((e) => {
        navigate("/principal/agendamentos");
        toast.error("O agendamento não foi encontrado.");
      });
  }, [schedulingId, navigate]);

  function deleteScheduling(e) {
    e.preventDefault();
    SchedulingService.deleteScheduling(schedulingId)
      .then((e) => {
        toast.success(e.data);
        navigate(-1);
      })
      .catch((e) => {
        toast.error(e.response.data);
      });
  }

  const appointment = {
    paciente: { id: scheduling?.paciente.id },
    medico: { id: scheduling?.agenda.medico.id },
    agendamento: { id: schedulingId },
  };

  function registerAppointment(e) {
    e.preventDefault();
    AppointmentService.registerAppointment(appointment)
      .then((e) => {
        toast.success("Consulta registrada com sucesso.");
        if (sessionStorage?.doctorId) {
          navigate("/principal");
        } else {
          navigate(`/avaliar/${e.data.id}`);
        }
      })
      .catch((e) => {
        toast.error(e.response.data);
      });
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
                <div className="details mt-5">
                  <div className="details-column">
                    <div className="detail-column">
                      <div>
                        <h4 className="details-text">Paciente:</h4>
                        <div>
                          <p className="details-description mt-2">
                            {scheduling.paciente.nome}
                          </p>
                        </div>
                      </div>
                      <div className="my-4">
                        <h4 className="details-text">Tipo da consulta:</h4>
                        <div>
                          <p className="details-description mt-2">
                            {scheduling.tipoConsulta}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="details-text">
                          Informações Adicionais:
                        </h3>
                        <div>
                          <p className="details-description mt-2">
                            {scheduling.detalhamento}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="detail-column">
                      <div>
                        <h4 className="details-text">Local da consulta:</h4>
                        <div>
                          <h5 className="details-description my-2">
                            {scheduling.localConsulta.apelido}
                          </h5>
                        </div>
                      </div>
                      <div>
                        <p className="details-description">
                          {scheduling.localConsulta.logradouro},{" "}
                          {scheduling.localConsulta.numero}
                        </p>
                        <p className="details-description">
                          {scheduling.localConsulta.cidade},{" "}
                          {scheduling.localConsulta.estado}
                        </p>
                        <p className="details-description">
                          {scheduling.horarioAgendado.hora},{" "}
                          {scheduling.horarioAgendado.data}
                        </p>
                        <p className="details-description">
                          Contato: {scheduling.agenda.contato}
                        </p>
                      </div>
                    </div>
                    <div className="detail-column">
                      <div>
                        <h4 className="details-text">Valor da consulta:</h4>
                        <div className="details-description">
                          <h4>R$ {scheduling.valorFinalConsulta}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <form
                      onSubmit={registerAppointment}
                      className="cancel-button mx-3"
                    >
                      <CustomButton
                        type={"submit"}
                        action="Consulta realizada"
                        bgColor="light green"
                      />
                    </form>
                    <form
                      onSubmit={deleteScheduling}
                      className="cancel-button mx-3"
                    >
                      <CustomButton
                        type={"submit"}
                        action="Cancelar consulta"
                        bgColor="red"
                      />
                    </form>
                  </div>
                </div>
              ) : (
                <div className="details mt-5">
                  <div className="details-column">
                    <div className="doctor-container">
                      <div>
                        <h4 className="details-text">Médico(a):</h4>
                        <div>
                          <h5 className="details-description mt-2">
                            Dr(a). {scheduling.agenda.medico.nome}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="detail-column">
                      <div>
                        <h4 className="details-text">Local da consulta:</h4>
                        <div>
                          <h5 className="details-description my-2">
                            {scheduling.localConsulta.apelido}
                          </h5>
                        </div>
                      </div>
                      <div>
                        <p className="details-description">
                          {scheduling.localConsulta.logradouro},{" "}
                          {scheduling.localConsulta.numero}
                        </p>
                        <p className="details-description">
                          {scheduling.localConsulta.cidade},{" "}
                          {scheduling.localConsulta.estado}
                        </p>
                        <p className="details-description">
                          {scheduling.horarioAgendado.hora},{" "}
                          {scheduling.horarioAgendado.data}
                        </p>
                        <p className="details-description">
                          Contato: {scheduling.agenda.contato}
                        </p>
                      </div>
                    </div>
                    <div className="detail-column">
                      <div>
                        <h4 className="details-text">Tipo da consulta:</h4>
                        <div>
                          <p className="details-description mt-2">
                            {scheduling.tipoConsulta}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="details-text mt-4">
                          Informações Adicionais:
                        </h4>
                        <div>
                          <p className="details-description mt-2">
                            {scheduling.detalhamento}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="detail-column">
                      <div>
                        <h4 className="details-text">Valor da consulta:</h4>
                        <div className="details-description mt-2">
                          <h4>R$ {scheduling.valorFinalConsulta}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <form
                      onSubmit={registerAppointment}
                      className="cancel-button mx-3"
                    >
                      <CustomButton
                        type={"submit"}
                        action="Consulta realizada"
                        bgColor="light green"
                      />
                    </form>
                    <form
                      onSubmit={deleteScheduling}
                      className="cancel-button mx-3"
                    >
                      <CustomButton
                        type={"submit"}
                        action="Cancelar consulta"
                        bgColor="red"
                      />
                    </form>
                  </div>
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
