import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DoctorDefined from "../../assets/doctors/image 11.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";
import PatientService from "../../services/PatientService";
import DoctorService from "../../services/DoctorService";

const ReviewBox = ({doctorId}) => {

    const pacientId = sessionStorage.patientId;
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const avalicao = {
        nota: rating,
        comentario: comment,
        paciente: PatientService.getById(pacientId),
        registro: DoctorService.getAssessmentRecord(doctorId)
    }

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  function formSubmit(e) {
    e.preventDefault();
    PatientService.registerReview(avalicao)
    .then(e => {
        toast.success("Avaliação feita com sucesso.");
      })
      .catch(e => {
        toast.error(e.response.data);
      });
  }

  return (
    <>
    <Form onSubmit={formSubmit}>
        <div className="review-box">
            <div className="review-box-contianer d-flex justify-content-center">
                <div className="review-box-container d-flex justify-content-center align-items-center col-8 mt-5">
                    <div className="row">
                        <h1 className="review-box-text">Dr. Franklin</h1>
                        <div className="mt-4">
                            <img className="review-box-image" src={DoctorDefined} alt="Doutor" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="review-star-button mt-4" role="group" aria-label="Rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className="review-star-button-action"
                                onClick={() => handleRatingClick(star)}
                            >
                                {star <= rating ? (
                                <FontAwesomeIcon icon={faStar} color="#00bf63" />
                                ) : (
                                <FontAwesomeIcon icon={faStar} color="#D3D3D3" />
                                )}
                            </button>
                            ))}
                        </div>
                        <div className="review-input">
                            <textarea type="text" 
                            class="review-input-box" 
                            placeholder="Escreva sua avaliação" 
                            onChange={(e) => setComment(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-button">
                <Button className="review-button-add" type="submit">
                    Avaliar
                </Button>
            </div>
        </div>
    </Form>
    </>
  );
};

export default ReviewBox;