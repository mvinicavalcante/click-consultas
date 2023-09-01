import "./styles.css";

import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import FormInput from "../../form/formInput";
import DoctorService from "../../../services/DoctorService";

const AddRowModal = (props) => {
  const [crmNumber, setCrmNumber] = useState("");
  const [crmUf, setCrmUf] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [specialtyRQE, setSpecialtyRQE] = useState("");
  const doctorId = sessionStorage.doctorId;

  const crm = {
    numero: crmNumber,
    uf: crmUf
  };

  const especialidade = {
    nome: specialty,
    numeroRQE: specialtyRQE
  };

  function save(e) {
    e.preventDefault();
    
    if (props.type === "crm") {
      DoctorService.registerCRM(doctorId, crm)
        .then(response => {
          props.content.push(response.data[response.data.length - 1]);
          toast.success("CRM adicionado com sucesso.");
        })
        .catch((e) => {
          toast.error(e.response.data);
        });
    }
    else if (props.type === "speciality") {
      DoctorService.registerSpecialty(doctorId, especialidade)
        .then(response => {
          props.content.push(response.data[response.data.length - 1]);
          toast.success("Especialidade adicionada com sucesso.");
        })
        .catch((e) => {
          toast.error(e.response.data);
        });
    }
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={save}>
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
          <div className="body">
            {props.type === "crm" ? (
              <div className="row">
                <div className="col-md-6">
                  <FormInput
                    label="Número CRM"
                    type="number"
                    placeholder="Digite o número do CRM"
                    onChange={(e) => setCrmNumber(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <FormInput
                    label="Estado"
                    type="state"
                    placeholder="Selecione a UF"
                    onChange={(e) => setCrmUf(e.target.value)}
                    valueSelect={crmUf}
                  />
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-6">
                  <FormInput
                    label="Especialidade"
                    type="specialty"
                    placeholder="Digite o nome"
                    onChange={(e) => setSpecialty(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <FormInput
                    label="Nº RQE"
                    type="number"
                    placeholder="Digite o nº RQE"
                    onChange={(e) => setSpecialtyRQE(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddRowModal;
