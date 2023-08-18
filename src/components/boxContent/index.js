import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import AddRowModal from "../modal/addRow";

const BoxContent = ({ title, type, content }) => {
  const [currentContent, setCurrentContent] = useState(content);
  const [modalShow, setModalShow] = useState(false);

  function deleteRow(itemId) {
    const updatedContent = currentContent.filter((item) => item.id !== itemId);
    setCurrentContent(updatedContent);
  }

  return (
    <div className="box-content-container">
      <h3>{title}</h3>
      <div className="box-content">
        <div className="box-header flex-row">
          <button className="btn-add" onClick={() => setModalShow(true)}>
            <FontAwesomeIcon
              icon={faPlus}
              color="#00bf63"
              className="icon"
              width={20}
              id="plus-svg"
            />
          </button>
        </div>
        <div className="box-body">
          {currentContent.map((item) => (
            <div key={item.id} className="item">
              <div className="col-md-10 mb-0">
                <label>
                  {type === "crm" ? (
                    <>
                      <label>
                        {item.numero}-{item.uf}
                      </label>
                      <p className="subtitle">Status: {item.status}</p>
                    </>
                  ) : (
                    <>
                      <label>{item.nome}</label>
                      <p className="subtitle">
                        {item.nrqe}, Status: {item.status}
                      </p>
                    </>
                  )}
                </label>
              </div>
              <button className="trash" onClick={() => deleteRow(item.id)}>
                <FontAwesomeIcon
                  icon={faTrash}
                  color="#00bf63"
                  width={20}
                  id={`trash-${type === "crm" ? item.numero : item.nome}-${
                    item.id
                  }-svg`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <AddRowModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={type}
        content={currentContent}
      />
    </div>
  );
};

export default BoxContent;
