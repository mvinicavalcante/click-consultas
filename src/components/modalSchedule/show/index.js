import "./styles.css";

import Modal from "react-bootstrap/Modal";

const ShowModal = (props) => {

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
            <h3>{props.schedule.especialidade}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-modal">
          <div className="body">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label className="form-label">Local</label>
                <h5 className="info-output">{props.schedule.local}</h5>
              </div>
              <div className="col-md-6">
                <label className="form-label">Hora Início</label>
                <h5 className="info-output">{props.schedule.horaInicio}</h5>
              </div>
              <div className="col-md-6">
                <label className="form-label">Tipos de Consulta</label>
                <h5 className="info-output">{props.schedule.tiposConsulta}</h5>
              </div>  
              <div className="col-md-6">
                <label className="form-label">Hora Fim</label>
                <h5 className="info-output">{props.schedule.horaFim}</h5>
              </div> 
              <div className="col-md-6">
                <label className="form-label">Valor Consulta</label>
                <h5 className="info-output">{props.schedule.valor}</h5>
              </div>  
              <div className="col-md-6">
                <label className="form-label">Planos Atendidos</label>
                <h5 className="info-output">{props.schedule.planosAtendidos}</h5>
              </div>    
            </div>
          </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShowModal;