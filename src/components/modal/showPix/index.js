import "./styles.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import UserService from "../../../services/UserService";
import AddPixModal from "../addPix";
import RemoveRowModal from "../removeRow";

const ShowPix = (props) => {
  const [currentContent, setCurrentContent] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [selectedPixId, setSelectedPixId] = useState(null);
  const [removeModalShow, setRemoveModalShow] = useState(false);
  const userId = sessionStorage.doctorId ?? sessionStorage.patientId;

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  const divStyleAddStatus = {
    filter: isBlurred ? "blur(5px)" : "none",
  };

  useEffect(() => {
    setCurrentContent(props.content);
  }, [props.content]);

  function deleteRow(itemId) {
    UserService.deletePix(userId, itemId)
      .then((e) => {
        toast.success(e.data);
      })
      .catch((e) => {
        console.error(e.response.data);
      });
    setCurrentContent(currentContent.filter((item) => item.id !== itemId));
    setRemoveModalShow(false);
  }

  function selectPixToDelete(pixId) {
    setSelectedPixId(pixId);
    setRemoveModalShow(true);
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="title-modal"
          >
            <h3>Visualizar Chave Pix</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          <div style={divStyleAddStatus} className="body">
            <div className="row justify-content-center">
              <div className="pix-labels row col-11 mb-0">
                <label className="pix-label col-5">Chave</label>
                <label className="pix-label col">Tipo</label>
              </div>
              {currentContent?.map((chavePix) => (
                <div key={chavePix.id} className="pix-details row col-11 mb-2">
                  <h5 className="pix-text col-5">{chavePix.chave}</h5>
                  <h5 className="pix-text col">
                    {chavePix.tipo.toUpperCase()}
                  </h5>
                  <div className="pix-details-button col mt-3">
                    <button
                      className="trash"
                      onClick={() => selectPixToDelete(chavePix.id)}
                    >
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
              ))}
              <div className="pix-add-button col-6">
                <button
                  className="custom-button rounded-5"
                  onClick={() => {
                    setModalShow(true);
                    toggleBlur();
                  }}
                >
                  Adicionar Pix
                </button>
              </div>
            </div>
            <AddPixModal
              show={modalShow}
              onHide={() => {
                setModalShow(false);
                toggleBlur();
              }}
              content={currentContent}
              updateContent={setCurrentContent}
            />
          </div>
        </Modal.Body>
      </Modal>
      <RemoveRowModal
        show={removeModalShow}
        onHide={() => setRemoveModalShow(false)}
        onDelete={() => {
          deleteRow(selectedPixId);
          setSelectedPixId(null);
        }}
      />
    </>
  );
};

export default ShowPix;
