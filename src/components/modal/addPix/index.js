import "./styles.css";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import FormInput from "../../form/formInput";
import UserService from "../../../services/UserService";

const AddPixModal = (props) => {

  const [chavePix, setChavePix] = useState("");
  const [tipoChavePix, setTipoChavePix] = useState("");
  const userId = sessionStorage.doctorId ?? sessionStorage.patientId;

  const pix = {
    chave: chavePix,
    tipo: tipoChavePix
  }

  function formSubmit(e) {
    e.preventDefault();
    UserService.registerPix(userId, pix)
      .then(e => {
        toast.success("Pix adicionado com sucesso.");
        props.updateContent(e.data);
      })
      .catch(e => {
        toast.error(e.response.data);
      });
    props.onHide();
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Form onSubmit={formSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
            <h3>Adicionar Chave Pix</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          <div className="body">
            <div className="row justify-content-center">
              <div className="pix-labels row col-12 mb-0">
                <label className="pix-label col-5">Chave</label>
                <label className="pix-label col">Tipo</label>
              </div>
              <div className="row pix-form-container">
                <div className="pix-form col-5">
                  <FormInput
                    placeholder="Digite a chave pix"
                    onChange={(e) => setChavePix(e.target.value)}
                    valueSelect={chavePix}
                  />
                </div>
                <div className="pix-form col-5">
                  <FormInput
                    type="pixType"
                    placeholder="Selecione o tipo da chave"
                    onChange={(e) => setTipoChavePix(e.target.value)}
                    valueSelect={tipoChavePix}
                  />
                </div>
                <div className="pix-form pix-form-button col mt-2 pt-1">
                  <Button variant="success" type="submit">
                    Adicionar
                  </Button>
                </div>
              </div >
            </div >
          </div >
        </Modal.Body >
      </Form >
    </Modal >
  )
}

export default AddPixModal