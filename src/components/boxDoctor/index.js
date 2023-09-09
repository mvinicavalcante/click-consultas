import "./styles.css";
import defaultAvatar from "../../assets/doctors/defaultAvatar.png";

const BoxDoctor = ({ id, name, address,speciality, avatar, onClick }) => {

  return (
    <div className="box-doctor" key={id}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-2 justify-content-center align-items-center">
            {avatar ? (
              <img src={avatar} width={110} height={120} alt={name} className="avatar rounded-4" />
            ) : (
              <img src={defaultAvatar} alt={name} className="avatar" />
            )}
          </div>

          <div className="col-md-4 infos">
            <h2 className="doctor-name mb-1">Dr. {name}</h2>
            <h5 className="speciality">
              {speciality.map((specialityItem, index) => {
                return (
                  <label key={`speciality-${id}-${index}`}>
                    {specialityItem}
                  </label>
                );
              })}
            </h5>
          </div>

          <div className="col-md-4">
            <div className="address text-start">
              {address.length > 0 ?
                <h4>Endereços:</h4>
                :
                <h5>Não possui endereço cadastrado</h5>
              }
              {address.map((address, index) => {
                return <label key={`info-${id}-${index}`}>{address.logradouro}, {address.numero}, {address.cidade}-{address.estado}</label>;
              })}
            </div>
          </div>


          <div className="col-md-2 pt-3">
            <button
              className="btn btn-primary"
              href="/consultas"
              onClick={onClick}
              disabled={address.length === 0 && true}
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDoctor;
