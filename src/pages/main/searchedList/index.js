import { useParams } from "react-router-dom";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

const SearchedList = () => {
  const { medicos } = useParams();

  const parsedMedicos = JSON.parse(medicos);

  return (
    <>
      <Header />a
      {parsedMedicos.map((medico) => {
        return (
          <div key={medico.id}>
            <h1>{medico.nome}</h1>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default SearchedList;
