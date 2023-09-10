import "./styles.css";
import CustomButton from "../customButton"

const HistoryBox = ({ content, type, action }) => {

  function formatarData(data) {
    const partes = data.split('-');
    if (partes.length === 3) {
      const [ano, mes, dia] = partes;
      return `${dia}/${mes}/${ano}`;
    }
    return data; 
  }

  return (
    <>
      <div className="history-box-container" >
        <div className="container-fluid history-box justify-content-center align-items-center">
          <div className="history-details">
            <div className="history-details-info">
              <h4 className="history-text">Medico</h4>
              <p className="history-text-description">{content.medico.nome}</p>
              <p className="history-text-description">---{content.agendamento.agenda.especialidadeMedica}---</p>
            </div>
            <div className="divider"></div>
            <div className="history-details-info">
              <h4 className="history-text">Paciente</h4>
              <p className="history-text-description">{content.paciente.nome}</p>
            </div>
            <div className="divider"></div>
            <div className="history-details-info">
              <h4 className="history-text">Data e Hora</h4>
              <p className="history-text-description">{formatarData(content.agendamento.horarioAgendado.data)}</p>
              <p className="history-text-description">{content.agendamento.horarioAgendado.hora}</p>
            </div>
            <div className="divider"></div>
            <div className="history-details-info">
              <h4 className="history-text">Endereço</h4>
              <p className="history-text-description">
                {content.agendamento.localConsulta.logradouro}, {content.agendamento.localConsulta.numero}, {content.agendamento.localConsulta.bairro}
                <br/>
                {content.agendamento.localConsulta.cidade}-
                {content.agendamento.localConsulta.estado}
              </p>
            </div>
            <div className="divider"></div>
            <div className="history-details-info">
              <h4 className="history-text">Valor</h4>
              <p className="history-text-description">R${content.agendamento.agenda.valorConsulta}</p>
            </div>
          </div>
        </div>
        {type === "paciente" ? (
          content.status === "Disponivel" ? (
            <div>
              <CustomButton
                className="review-button-history"
                action="Avaliar consulta"
                path={`${action}/${content.id}`}
                bgColor="light green"
              />
            </div>
          ) : (
            <div>
              <CustomButton
                className="review-button-history"
                action="Consulta avaliada"
                path="/perfil/historico"
                bgColor="gray"
              />
            </div>
          )
        ) : (
          content.status === "disponivel" ? (
            <div>
              <CustomButton
                className="review-button-history"
                action="Consulta não avaliada"
                path="/perfil/historico"
                bgColor="gray"
              />
            </div>
          ) : (
            <div>
              <CustomButton
                className="review-button-history"
                action="Visualizar avaliação"
                path="/perfil/historico"
                bgColor="light green"
              />
            </div>
          )
        )}
      </div>
    </>
  )
}

export default HistoryBox;