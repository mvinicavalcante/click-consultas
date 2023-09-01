import React, { useState }  from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import ShowModal from "../modalSchedule/show";

const ScheduleBox = ({ id, onDelete, content }) => {

  const [currentContent] = useState(content);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="schedule-box-container"> 
      <div className="box-content flex-row col-md-10 mb-0" >
        <div className="box-title">
          <button className="expand" onClick={() => setModalShow(true)}>
          <h3>{content.especialidade}</h3>
          </button>
        </div>
        <div className="box-details">
          <p className="box-details">
          {content.local}
          <br/>
          {content.valor}
          </p>
        </div>
        <div className="box-buttons">
          <hr/>
          <button className="update" onClick={() => window.location.href="/principal/agendas/atualizar"}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              color="#00bf63"
              className="icon"
              width={20}
              id="plus-svg"
              />
          </button>
          <button className="trash" onClick={() => {onDelete(id)}} >
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
      <ShowModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={currentContent}
        schedule = {content}
      />
    </div>
  );
};

export default ScheduleBox
;