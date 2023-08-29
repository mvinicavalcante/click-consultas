import "./styles.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import FormInput from "../../form/formInput";
import { useState } from "react";

const AddRowModal = (props) => {
  const [diaSemana, setDiaSemana] = useState();
  const [horaInicio, setHoraInicio] = useState();
  const [horaFim, setHoraFim] = useState();

  function salvar() {
      const newHorario = {
        id: props.content.length + 1,
        diaSemana : diaSemana,
        horarioInicio: horaInicio,
        horarioFim: horaFim
      };
      props.content.push(newHorario);
      props.onHide();
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
            <h3>Cadastre um horário </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-modal">
          <div className="body">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <FormInput
                  label="Dia da Semana"
                  name="diaSemana"
                  type={"diaSemana"}
                  placeholder="Selecione o dia da semana"
                  onChange={(e) => setDiaSemana(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <FormInput
                  label="Hora Inicio"
                  name="horaInicio"
                  placeholder="Selecione a hora de inicio"
                  onChange={(e) => setHoraInicio(e.target.value)}
                  type={"time"}
                  valueSelect={horaInicio}
                />
              </div>
              <div className="col-md-6">
                <FormInput
                  label="Hora Fim"
                  name="horaFim"
                  placeholder="Selecione a hora de encerramento"
                  onChange={(e) => setHoraFim(e.target.value)}
                  type={"time"}
                  valueSelect={horaFim}
                />
              </div>
            </div>
          </div>
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