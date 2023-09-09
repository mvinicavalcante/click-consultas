import "./styles.css";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import BoxDoctor from "../../../../components/boxDoctor";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorService from "../../../../services/DoctorService";

const SearchedList = () => {
  const [parsedMedicos, setParsedMedicos] = useState([]);
  const [doctorPhotos, setDoctorPhotos] = useState([]);
  const navigate = useNavigate();

  function backToSearch() {
    navigate("/principal/busca");
  }

  function goToMakeAppointment(id) {
    const medicoSelecionado = parsedMedicos.find(
      (medico) => medico.id === parseInt(id)
    );
    sessionStorage.setItem(
      "medicoSelecionado",
      JSON.stringify(medicoSelecionado)
    );
    navigate("/principal/medico-selecionado");
  }

  useEffect(() => {
    const medicosFromSession = sessionStorage.getItem("medicos");
    const fetchedDoctorPhotos = {};

    if (medicosFromSession) {
      const parsedMedicos = JSON.parse(medicosFromSession);
      setParsedMedicos(parsedMedicos);

      parsedMedicos.map((medico) => {
        return DoctorService.getProfilePhotoByDoctorId(medico.id)
          .then((response) => {
            const contentType = response.headers['content-type'];
            const arrayBufferView = new Uint8Array(response.data);
            const blob = new Blob([arrayBufferView], { type: contentType });
            const photoUrl = URL.createObjectURL(blob);
            fetchedDoctorPhotos[medico.id] = photoUrl;
            setDoctorPhotos(fetchedDoctorPhotos);
          })
          .catch((e) => { })
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid searched-list-container">
        <div className="container pt-0 d-flex flex-column">
          {parsedMedicos.map((medico) => {
            return (
              <BoxDoctor
                id={medico.id}
                name={medico.nome}
                address={medico.enderecos}
                speciality={medico.especialidades.map((especialidade) => {
                  const specialityArray = [];
                  specialityArray.push(especialidade.nome);
                  return especialidade.nome;
                })}
                avatar={doctorPhotos[medico.id]}
                onClick={() => goToMakeAppointment(medico.id)}
              />
            );
          })}
        </div>
        <div className="text-center mt-5 mb-5">
          <button className="btn btn-secondary" onClick={backToSearch}>
            Refazer pesquisa
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchedList;
