import "./styles.css";

import { useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormInput from "../../form/formInput";

const AddRowHorarioModal = (props) => {
  const [data, setData] = useState();
  const [horaInicio, setHoraInicio] = useState();
  const [horaFim, setHoraFim] = useState();

  function adicionarHorarios(e) {
    e.preventDefault();

    if (props.content.length > 0 && props.content.some(e => e.data === data))
      return toast.error("A data inserida já foi adicionada.");

    try {
      props.content.push({ data, horarios: getTimeRanges(horaInicio, horaFim) });
    } catch (e) {
      toast.error(e.message);
    }
    props.onHide();
  }

  function getTimeRanges(inicio, fim, language = window.navigator.language) {
    const ranges = [];
    const date = new Date();
    const format = { hour: 'numeric', minute: 'numeric' };

    let [horaInicio, minInicio] = inicio.split(":");
    let [horaFim, minFim] = fim.split(":");

    const startMinutes = parseInt(horaInicio) * 60 + parseInt(minInicio);
    const endMinutes = parseInt(horaFim) * 60 + parseInt(minFim);

    if (startMinutes > endMinutes)
      throw new Error("A hora inicial não pode ser maior do que a hora final.");

    for (let minutes = startMinutes; minutes <= endMinutes; minutes += 60) {
      const hours = Math.floor(minutes / 60);
      const minutesPart = minutes % 60;

      date.setHours(hours);
      date.setMinutes(minutesPart);
      ranges.push(date.toLocaleTimeString(language, format));
    }

    return ranges;
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
          <h3>Adicione os horários para consulta</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-modal">
        <form onSubmit={adicionarHorarios} className="body" id="formHorarios">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <FormInput
                label="Data"
                type={"date"}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div className="col-md-5">
              <FormInput
                label="Hora Inicio"
                onChange={(e) => setHoraInicio(e.target.value)}
                type={"time"}
                valueSelect={horaInicio}
              />
            </div>
            <div className="col-md-5">
              <FormInput
                label="Hora Fim"
                onChange={(e) => setHoraFim(e.target.value)}
                type={"time"}
                valueSelect={horaFim}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" form="formHorarios">
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRowHorarioModal;