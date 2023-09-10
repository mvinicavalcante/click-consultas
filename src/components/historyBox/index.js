import "./styles.css";
import CustomButton from "../customButton"
import { useState } from "react";
import ShowReviewModal from "../modal/showReview";

const HistoryBox = ({ content, type, action }) => {

  const[modalShow, setModalShow] = useState();

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
              <button className="review-button-history-gray rounded-5" 
              onClick={() => setModalShow(true)}>
              Consulta avaliada
              </button>
            </div>
          )
        ) : (
          content.status === "disponivel" ? (
            <div>
              <CustomButton
                className="review-button-history"
                action="Consulta não avaliada"
                bgColor="gray"
              />
            </div>
          ) : (
            <div>
              <button className="review-button-history-green rounded-5" 
              onClick={() => setModalShow(true)}>
              Visualizar avaliação
              </button>
            </div>
          )
        )}
      </div>
      <ShowReviewModal
        show={modalShow}
        onHide={() => { setModalShow(false)}}
        content={content.id}
        author={content.paciente.nome}
      />
    </>
  )
}

export default HistoryBox;