import "./styles.css";
import Header from "../../../components/header";
import SearchInput from "../../../components/searchInput";
import Footer from "../../../components/footer";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const MainSearch = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("medico/3");
        setMedicos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [0]);

  console.log(medicos);

  return (
    <>
      <Header />
      <div className="main d-flex flex-column">
        <label className="page-title">
          Digite a especialidade médica desejada
        </label>
        <SearchInput />
        {medicos !== null && (
          <>
            <li>{medicos.id}</li>
            <li>{medicos.nome}</li>
            <li>{medicos.cpf}</li>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MainSearch;
