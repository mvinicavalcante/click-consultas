import "./styles.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  function buscar() {
    alert(search);
  }

  return (
    <div className="d-flex input-container">
      <div className="search-wrapper">
        <input
          className="searchInput"
          type="text"
          placeholder="Search"
          value={search}
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
