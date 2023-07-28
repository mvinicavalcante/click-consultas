import "./styles.css";
import Doctor from "../../assets/user-doctor.svg";
import Patient from "../../assets/user-patient.svg";

const PictureBox = ({ type }) => {
  function redirectToPage() {
    if (type === "doctor") {
      window.location.href = "/cadastro/medico-cadastro";
    } else {
      window.location.href = "/cadastro/paciente-cadastro";
    }
  }

  return (
    <div className="picture-box d-flex flex-column align-items-center">
      {type === "doctor" ? (
        <button onClick={redirectToPage} className="picture-box-button">
          <div className="img-fluid logo">
            <img src={Doctor} height={150} alt="Doctor" />
          </div>
          <label className="d-flex justify-content-center">Sou um médico</label>
        </button>
      ) : (
        <button onClick={redirectToPage} className="picture-box-button">
          <div className="img-fluid logo">
            <img src={Patient} height={150} alt="Patient" />
          </div>
          <label className="d-flex justify-content-center">
            Sou um paciente
          </label>
        </button>
      )}
    </div>
  );
};

export default PictureBox;
