import "./styles.css";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import UserService from "../../../services/UserService"

const ShowReviewModal = (props) => {
    const [currentContent, setCurrentContent] = useState([]);
    
    useEffect((e) => {
    UserService.getReview(props.content)
        .then(e => {
        setCurrentContent(e.data);
        })
        .catch(e => {
        });
    }, []);

    const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} className="star m-1">
        <FontAwesomeIcon icon={faStar} size="2x" color="white" />
        </span>);
    }
    return stars;

    };

    return(
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
        <h3>Visualizar Avaliação</h3>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="body-modal">
        <div>
            <div className="">
                <div className="view-review d-flex">
                    <div className="view-review-author-label">
                        <h2 className="">Autor: </h2>
                    </div>
                    <div className="view-review-author-container">
                        <h3 className="view-review-author">{props.author}</h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    {renderStars(currentContent.nota)}
                </div>
                <div className="comment-box">
                    <h3 className="comment-box-text">{currentContent.comentario}</h3>
                </div>
            </div>
        </div>
    </Modal.Body>
    </Modal>
    )
}

export default ShowReviewModal;