import "./styles.css";
import CustomButton from "../../customButton"


const SchedulingBox = ({ content, type }) => {
  return (
    <>
      <div className="container scheduling-box-container" >
        <div className="container-fluid scheduling-box justify-content-center align-items-center">
          <div className="container scheduling-container">
            <div className="scheduling-details">
              <div className="scheduling-details-info">
                <h4 className="scheduling-text">Médico</h4>
                <p className="scheduling-text-description">{content.agenda.medico.nome}</p>
                <p className="scheduling-text-description">{content.agenda.especialidadeMedica}</p>
              </div>
              <div className="divider"></div>
              <div className="scheduling-details-info">
                <h4 className="scheduling-text">Paciente</h4>
                <p className="scheduling-text-description">{content.paciente.nome}</p>
              </div>
              <div className="divider"></div>
              <div className="scheduling-details-info">
                <h4 className="scheduling-text">Data e Horário</h4>
                <p className="scheduling-text-description">{content.horarioAgendado.data}</p>
                <p className="scheduling-text-description">{content.horarioAgendado.hora}</p>
              </div>
              <div className="divider"></div>
              <div className="scheduling-details-info">
                <h4 className="scheduling-text">Endereço</h4>
                <p className="scheduling-text-description">
                  {content.localConsulta.logradouro + ", "}
                  {content.localConsulta.numero + ", "}
                  {content.localConsulta.bairro + ", "}
                  {content.localConsulta.cidade + ", "}
                  {content.localConsulta.estado}
                </p>
              </div>
              <div className="divider"></div>
              <div className="scheduling-details-info">
                <h4 className="scheduling-text">Valor</h4>
                <p className="scheduling-text-description">R$ {content.valorFinalConsulta}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <CustomButton
                className="view-button"
                action="Visualizar"
                path={`/principal/agendamentos/visualizar/${content.id}`}
                bgColor="light green"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SchedulingBox;