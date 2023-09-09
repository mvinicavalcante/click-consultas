import "./styles.css";
import Header from "../../../components/header";
import SearchInput from "../../../components/searchInput";
import Footer from "../../../components/footer";

const MainSearch = () => {
  return (
    <>
      <Header />
      <div className="main d-flex flex-column ">
        <h4 className="page-title">
          Digite a especialidade médica desejada
        </h4>
        <SearchInput />
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
};

export default MainSearch;
