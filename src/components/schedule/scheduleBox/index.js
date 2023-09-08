import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import ShowScheduleModal from "../../modal/showSchedule";

const ScheduleBox = ({ id, onDelete, content }) => {

  const [currentContent] = useState(content);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="schedule-box-container">
      <div className="box-content flex-row col-md-10 mb-0" >
        <div className="box-title">
          <button className="expand" onClick={() => setModalShow(true)}>
            <h3>{content.especialidadeMedica}</h3>
          </button>
        </div>
        <div className="box-details">
          <p className="box-details">
            {content.enderecoMedico.apelido}
            <br />
            R$ {content.valorConsulta}
          </p>
        </div>
        <div className="box-buttons">
          <hr />
          <button className="update" onClick={() => navigate("/principal/agendas/atualizar")}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              color="#00bf63"
              className="icon"
              width={20}
              id="plus-svg"
            />
          </button>
          <button className="trash" onClick={() => { onDelete(id) }} >
            <FontAwesomeIcon
              icon={faTrash}
              color="#00bf63"
              className="icon"
              width={20}
              id="plus-svg"
            />
          </button>
        </div>
      </div>
      <ShowScheduleModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={currentContent}
        schedule={content}
      />
    </div>
  );
};

export default ScheduleBox
  ;
