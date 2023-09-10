import "./styles.css";

import { Button, Modal } from "react-bootstrap";

const RemoveRowModal = (props) => {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton className="header-modal">
        <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
          <h3>Confirmar exclusão</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-modal">
        <div className="body">
          <p>Tem certeza que deseja remover?</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" type="submit" onClick={props.onHide}>
          Cancelar
        </Button>
        <Button variant="danger" type="submit" onClick={props.onDelete}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveRowModal;
