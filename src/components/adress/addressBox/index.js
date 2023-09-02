import "./styles.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import ShowAddressModal from "../../modal/showAddress";

const AddressBox = ({ id, onDelete, content }) => {
  const [currentContent] = useState(content);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="address-box-container">
      <div className="box-content flex-row col-md-10 mb-0" >
        <div className="box-title">
          <button className="expand" onClick={() => setModalShow(true)}>
            <h3>{content.apelido}</h3>
          </button>
        </div>
        <div className="box-details">
          <p className="box-details">
            {content.logradouro} - Nº {content.numero}
          </p>
        </div>
        <div className="box-buttons">
          <hr />
          <button
            className="update"
            onClick={() => {
              window.location.href = "/principal/enderecos/atualizar"
              sessionStorage.setItem("addressId", id);
            }}
          >
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
      <ShowAddressModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={currentContent}
        address={content}
      />
    </div>
  );
};

export default AddressBox;
