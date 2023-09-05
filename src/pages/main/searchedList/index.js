import { useParams } from "react-router-dom";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import BoxDoctor from "../../../components/boxDoctor";

const SearchedList = () => {
  const { medicos } = useParams();

  const parsedMedicos = JSON.parse(medicos);

  return (
    <>
      <Header />
      <div className="container">
        {parsedMedicos.map((medico) => {
          console.log(medico);
          return (
            <BoxDoctor
              key={medico.id}
              id={medico.id}
              name={medico.nome}
              address={medico.endereco}
              speciality={medico.especialidade}
              crm={medico.crm}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default SearchedList;
