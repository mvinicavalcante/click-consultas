import "./styles.css";

const BoxDoctor = ({ doctorKey, name, address, speciality, crm }) => {
  return (
    <div className="box-doctor" key={doctorKey}>
      <h1>{name}</h1>
      <p>{address}</p>
      <p>{speciality}</p>
    </div>
  );
};

export default BoxDoctor;
