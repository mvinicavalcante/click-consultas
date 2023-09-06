import "./styles.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DoctorService from "../../services/DoctorService";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function buscar(e) {
    e.preventDefault();
    if (search) {
      try {
        const response = await DoctorService.getAllDoctorsForSpecialty(search);
        const medicos = response.data;

        sessionStorage.setItem("medicos", JSON.stringify(medicos));

        navigate("/principal/listarMedicos");
      } catch (error) {
        toast.error(error.response.data);
      }
    } else {
      toast.error("Pesquisa está vazia");
    }
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      buscar(e);
    }
  };

  return (
    <div className="d-flex input-container">
      <div className="search-wrapper">
        <input
          className="searchInput"
          type="text"
          placeholder="Pesquisar"
          value={search}
          onKeyUp={handleKeyUp}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={buscar} className="searchButton" type="submit">
          <FaSearch size="20px" fill="#00bf63" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
