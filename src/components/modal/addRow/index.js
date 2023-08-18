import "./styles.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import FormInput from "../../form/formInput";
import { useState } from "react";

const AddRowModal = (props) => {
  const [numeroCrm, setNumeroCrm] = useState();
  const [ufCrm, setUfCrm] = useState();
  const [statusCrm, setStatusCrm] = useState();

  const [nomeEspecialidade, setNomeEspecialidade] = useState();
  const [nrqeEspecialidade, setNrqeEspecialidade] = useState();
  const [statusEspecialidade, setStatusEspecialidade] = useState();

  function salvar() {
    if (props.type === "crm") {
      const newCrm = {
        id: props.content.length + 1,
        numero: numeroCrm,
        uf: ufCrm,
        status: statusCrm,
      };
      props.content.push(newCrm);
      props.onHide();
    } else {
      const newEspecialidade = {
        id: props.content.length + 1,
        nome: nomeEspecialidade,
        nrqe: nrqeEspecialidade,
        status: statusEspecialidade,
      };
      props.content.push(newEspecialidade);
      props.onHide();
    }
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
          {props.type === "crm" ? (
            <h3>Cadastre um CRM </h3>
          ) : (
            <h3>Cadastre uma especialiade</h3>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-modal">
        {props.type === "crm" ? (
          <div className="body">
            <div className="row">
              <div className="col-md-6">
                <FormInput
                  label="Número CRM"
                  type="number"
                  name="numerCrm"
                  placeholder="Digite o número do CRM"
                  onChange={(e) => setNumeroCrm(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <FormInput
                  label="Estado"
                  type="state"
                  name="uf"
                  placeholder="Selecione a UF"
                  onChange={(e) => setUfCrm(e.target.value)}
                  valueSelect={ufCrm}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormInput
                  label="Status"
                  type="text"
                  name="status"
                  placeholder="Digite o status"
                  onChange={(e) => setStatusCrm(e.target.value)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="body">
            <div className="row">
              <div className="col-md-6">
                <FormInput
                  label="Nome"
                  type="text"
                  name="name"
                  placeholder="Digite o nome"
                  onChange={(e) => setNomeEspecialidade(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <FormInput
                  label="NRQE"
                  type="number"
                  name="nrqe"
                  placeholder="Digite o nome"
                  onChange={(e) => setNrqeEspecialidade(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormInput
                  label="Status"
                  type="text"
                  name="name"
                  placeholder="Digite o status"
                  onChange={(e) => setStatusEspecialidade(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={salvar}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRowModal;
