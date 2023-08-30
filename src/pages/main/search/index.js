import "./styles.css";
import Header from "../../../components/header";
import SearchInput from "../../../components/searchInput";
import Footer from "../../../components/footer";
import { useEffect, useState } from "react";
import UserService from "../../../services/UserService";

const MainSearch = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    UserService.getById(3)
      .then(response => setMedicos(response.data))
      .catch((e) => {
        console.error(e);
      });
  });

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
