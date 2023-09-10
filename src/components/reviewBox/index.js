import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";
import PatientService from "../../services/PatientService";
import AppointmentService from "../../services/AppointmentService";
import DoctorService from "../../services/DoctorService";
import defaultAvatar from "../../assets/doctors/defaultAvatar.png";

const ReviewBox = ({ patientId, appointment }) => {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [doctorPhoto, setDoctorPhoto] = useState();
  const navigate = useNavigate();
  const [appointmentReview, setAppointmentReview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AppointmentService.getAppointmentById(appointment);
        setAppointmentReview(response.data);
      } catch (error) {
      }
    };
    fetchData();

    DoctorService.getProfilePhotoByDoctorId(appointmentReview?.medico.id)
      .then((response) => {
        const contentType = response.headers['content-type'];
        const arrayBufferView = new Uint8Array(response.data);
        const blob = new Blob([arrayBufferView], { type: contentType });
        const photoUrl = URL.createObjectURL(blob);
        setDoctorPhoto(photoUrl);
      })
      .catch((e) => { });

  }, [appointment, appointmentReview]);

  const avaliacao = {
    nota: rating,
    comentario: comment,
    idConsulta: appointment
  }

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const formSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (rating > 0) {
      PatientService.registerReview(avaliacao, patientId, appointmentReview?.medico.id)
        .then(() => {
          toast.success("Avaliação feita com sucesso.");
        })
        .catch((error) => {
          toast.error(error.response.data);
        });
    } else {
      toast.error("Selecione uma classificação antes de avaliar.");
    }
    navigate("/principal")
  }

  return (
    <>
      <Form onSubmit={formSubmit}>
        <div className="review-box">
          <div className="review-box-contianer d-flex justify-content-center">
            <div className="review-box-container d-flex justify-content-center align-items-center col-8 mt-5">
              <div className="row">
                <h1 className="review-box-text">Dr(a). {appointmentReview?.medico.nome}</h1>
                <div className="mt-4">
                  <img className="review-box-image" src={doctorPhoto ?? defaultAvatar} width={150} alt="Doutor" />
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="review-star-button mt-4" role="group" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="review-star-button-action"
                      onClick={() => handleRatingClick(star)}
                    >
                      {star <= rating ? (
                        <FontAwesomeIcon icon={faStar} size="2x" color="#00bf63" />
                      ) : (
                        <FontAwesomeIcon icon={faStar} size="2x" color="#D3D3D3" />
                      )}
                    </span>
                  ))}
                </div>
                <div className="review-input">
                  <textarea type="text"
                    className="review-input-box"
                    placeholder="Escreva sua avaliação"
                    onChange={(e) => setComment(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="review-button">
            <Button className="review-button-add" type="submit" >
              Avaliar
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default ReviewBox;