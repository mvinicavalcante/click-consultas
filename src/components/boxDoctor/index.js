import "./styles.css";
import defaultAvatar from "../../assets/doctors/defaultAvatar.png";
import definedAvatar from "../../assets/doctors/image 11.png";

const BoxDoctor = ({ doctorKey, name, address, speciality, crm, avatar }) => {
  return (
    <div className="box-doctor" key={doctorKey}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-2 justify-content-center align-items-center">
            {avatar ? (
              <img src={definedAvatar} alt={name} className="avatar" />
            ) : (
              <img src={defaultAvatar} alt={name} className="avatar" />
            )}
          </div>

          <div className="col-md-6 infos">
            <h1 className="doctor-name mb-1">{name}</h1>
            <h5 className="speciality">
              {speciality.map((speciality) => speciality)}
            </h5>
            <div className="address">
              {address.map((info) => {
                return <label>{info}</label>;
              })}
            </div>
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary" href="/consultas">
              Agendar Consulta com {name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDoctor;
