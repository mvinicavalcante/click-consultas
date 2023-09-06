import Header from "../../../components/header";
import Footer from "../../../components/footer";
import BoxDoctor from "../../../components/boxDoctor";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchedList = () => {
  const [parsedMedicos, setParsedMedicos] = useState([]);
  const navigate = useNavigate();

  function backToSearch() {
    navigate("/principal/busca");
  }

  useEffect(() => {
    const medicosFromSession = sessionStorage.getItem("medicos");

    if (medicosFromSession) {
      const parsedMedicos = JSON.parse(medicosFromSession);
      setParsedMedicos(parsedMedicos);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container pt-0 d-flex flex-column">
        {parsedMedicos.map((medico) => {
          return (
            <BoxDoctor
              key={medico.id}
              id={medico.id}
              name={medico.nome}
              address={medico.enderecos.map((endereco) => {
                const info = endereco.cidade + ", " + endereco.estado;
                const addressArray = [];
                addressArray.push(info);
                return endereco.cidade + ", " + endereco.estado;
              })}
              speciality={medico.especialidades.map(
                (especialidade) => especialidade.nome
              )}
              crm={medico.crm}
            />
          );
        })}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-secondary" onClick={backToSearch}>
          Refazer pesquisa
        </button>
      </div>
      <Footer />
    </>
  );
};

export default SearchedList;
