import "./styles.css";
import Header from "../../../components/header";
import SearchInput from "../../../components/searchInput";
import Footer from "../../../components/footer";

const MainSearch = () => {
  return (
    <>
      <Header />
      <div className="main d-flex flex-column">
        <label className="page-title">
          Digite a especialidade médica desejada
        </label>
        <SearchInput />
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
};

export default MainSearch;
