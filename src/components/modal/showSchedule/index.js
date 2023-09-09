import "./styles.css";

import Modal from "react-bootstrap/Modal";

const ShowScheduleModal = (props) => {

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
          <h3>{props.schedule.especialidadeMedica}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-modal">
        <div className="body">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <label className="form-label">Local</label>
              <h5 className="info-output">
                {props.schedule.enderecoMedico.apelido},
                {" " + props.schedule.enderecoMedico.logradouro},
                {" " + props.schedule.enderecoMedico.numero},
                {" " + props.schedule.enderecoMedico.cidade}-{props.schedule.enderecoMedico.estado}
              </h5>
            </div>
            <div className="col-md-6">
              <label className="form-label">Tipos de Consulta</label>
              <h5 className="info-output">
                {props.schedule.tiposConsulta.slice(0, -1).map((e) => e + ", ")}
                {props.schedule.tiposConsulta.slice(-1)}
              </h5>
            </div>
            <div className="col-md-6">
              <label className="form-label">Valor Consulta</label>
              <h5 className="info-output">R$ {props.schedule.valorConsulta}</h5>
            </div>
            <div className="col-md-6">
              <label className="form-label">Planos Atendidos</label>
              <h5 className="info-output">
                {props.schedule.planosAtendidos.length > 0 ? (
                  <>
                    {props.schedule.planosAtendidos.slice(0, -1).map((e) => e + ", ")}
                    {props.schedule.planosAtendidos.slice(-1)}
                  </>
                ) : (
                  "Não informado"
                )}
              </h5>
            </div>
            <div className="col-md-6">
              <label className="form-label">Contato</label>
              <h5 className="info-output">{props.schedule.contato}</h5>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShowScheduleModal;