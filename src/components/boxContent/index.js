import "./styles.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import AddRowModal from "../modal/addRow";
import DoctorService from "../../services/DoctorService";

const BoxContent = ({ title, type, content }) => {
  const [currentContent, setCurrentContent] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const doctorId = sessionStorage.doctorId;

  useEffect(() => {
    setCurrentContent(content)
  }, [content]);

  function deleteRow(type, itemId) {
    if (type === "crm") {
      DoctorService.deleteCRM(doctorId, itemId)
        .then(e => {
          toast.success(e.data);
        })
        .catch((e) => {
          console.error(e.response.data);
        });
    }
    else if (type === "speciality") {
      DoctorService.deleteSpecialty(doctorId, itemId)
        .then(e => {
          toast.success(e.data);
        })
        .catch((e) => {
          console.error(e.response.data);
        });
    }
    setCurrentContent(currentContent.filter((item) => item.id !== itemId));
  }

  return (
    <div className="box-content-container">
      <h3 className="pb-2">{title}</h3>
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
          {currentContent?.map((item) => (
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
                        {item.numeroRQE}, Status: {item.status}
                      </p>
                    </>
                  )}
                </label>
              </div>
              <button className="trash" onClick={() => deleteRow(type, item.id)}>
                <FontAwesomeIcon
                  icon={faTrash}
                  color="#00bf63"
                  width={20}
                  id={`trash-${type === "crm" ? item.numero : item.nome}-${item.id}-svg`}
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
        updateContent={setCurrentContent}
      />
    </div>
  );
};

export default BoxContent;
