import "./styles.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SearchInput from "../../components/searchInput";

const Main = () => {
  return (
    <>
      <Header />
      <div className="main">
        <label className="page-title">
          Digite a especialidade médica desejada
        </label>
        <SearchInput />
        <a href="#" className="favorites">
          Visualizar favoritos
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Main;
