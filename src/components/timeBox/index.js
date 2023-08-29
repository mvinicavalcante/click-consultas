import React, { useState }  from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import AddRowModal from "../modalHorario/addRow";

const TimeBox = ({ content }) => {

  const [currentContent, setCurrentContent] = useState(content);
  const [modalShow, setModalShow] = useState(false);

  function deleteRow(itemId) {
    const updatedContent = currentContent.filter((item) => item.id !== itemId);
    setCurrentContent(updatedContent);
  }

    return(
    <div className="box-content">
      <div className="box-button d-flex">
        <button className="btn-add d-flex col-sm justify-content-center align-items-center " onClick={() => setModalShow(true)}>
          <FontAwesomeIcon
            icon={faPlus}
            color="#00bf63"
            className="icon"
            width={20}
          />
          <h5 className="btn-text ">Registrar horário</h5>
        </button>

      </div>
      <div className="box-body">
        {currentContent.map((item) => (
          <div key={item.id} className="item">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label>
                    <label className="diaSemana">
                        {item.diaSemana}
                    </label>
                    <br/>
                    <label>
                      {item.horarioInicio}-{item.horarioFim}
                    </label>
              </label>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <button className="update" onClick={() => setModalShow(true)}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                color="#00bf63"
                width={20}
              />
            </button>
            <button className="trash" onClick={() => deleteRow(item.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                color="#00bf63"
                width={20}
              />
            </button>
            </div>
          </div>
        ))}
      </div>
      <AddRowModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={currentContent}
      />
    </div>
);
};

export default TimeBox;
