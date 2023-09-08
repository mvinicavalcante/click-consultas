import "./styles.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddRowHorarioModal from "../modal/addRowHorario";

const TimeBox = ({ content, updateContent }) => {
  const [modalShow, setModalShow] = useState(false);

  function deleteDateRow(index) {
    const updatedDataHorarios = [...content];
    updatedDataHorarios.splice(index, 1);
    updateContent(updatedDataHorarios);
  }

  function deleteTime(index, indexHora) {
    const updatedDataHorarios = [...content];
    updatedDataHorarios[index].horarios.splice(indexHora, 1);

    if (content[index].horarios.length === 0)
      deleteDateRow(index)
    else 
      updateContent(updatedDataHorarios);
  }

  return (
    <div className="box-content">
      <div className="box-button d-flex">
        <button className="btn-add d-flex col-sm justify-content-center align-items-center" type="button" onClick={() => setModalShow(true)}>
          <FontAwesomeIcon
            icon={faPlus}
            color="#00bf63"
            className="icon"
            width={20}
          />
          <h5 className="btn-text ">Adicionar horários</h5>
        </button>
      </div>
      <div className="box-body">
        {content?.map((item, index) => (
          <div key={index} className="item mt-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label>
                <label className="text-bold time-box-date mb-3 py-1 px-5 rounded-3">
                {new Date(item.data).toLocaleDateString('pt-BR')}
                </label>
                <br />
                {item.horarios?.map((hora, indexHora) =>
                  <label className="time-box-time">
                    {hora}
                    <label className="mx-1 cursor-pointer" onClick={() => deleteTime(index, indexHora)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        color="#00bf63"
                        size="sm"
                      />
                    </label>
                  </label>
                )}
              </label>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="trash cursor-pointer" onClick={() => { deleteDateRow(index) }}>
                <FontAwesomeIcon
                  icon={faTrash}
                  color="#00bf63"
                  size="xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddRowHorarioModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={content}
      />
    </div>

  );

};

export default TimeBox;
