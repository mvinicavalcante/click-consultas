import "./styles.css";

import Modal from "react-bootstrap/Modal";

const ShowModalAddress = (props) => {

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
            <h3>{props.address.apelido}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-modal">
          <div className="body">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label className="form-label">Logradouro</label>
                <h5 className="info-output">{props.address.logradouro}</h5>
              </div>
              <div className="col-md-6">
                <label className="form-label">CEP</label>
                <h5 className="info-output">{props.address.cep}</h5>
              </div>
              <div className="col-md-6">
                <label className="form-label">Estado</label>
                <h5 className="info-output">{props.address.estado}</h5>
              </div>  
              <div className="col-md-6">
                <label className="form-label">Cidade</label>
                <h5 className="info-output">{props.address.cidade}</h5>
              </div> 
              <div className="col-md-6">
                <label className="form-label">Número</label>
                <h5 className="info-output">{props.address.numero}</h5>
              </div>  
              <div className="col-md-6">
                <label className="form-label">Bairro</label>
                <h5 className="info-output">{props.address.bairro}</h5>
              </div>    
            </div>
          </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShowModalAddress;