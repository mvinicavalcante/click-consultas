import "./styles.css";

import Header from "../../components/header";
import CustomButton from "../../components/customButton";
import Footer from "../../components/footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="main">
        <CustomButton action="Agendar" path="/principal/busca" bgColor="green" />
        <CustomButton action="Agendamentos" bgColor="green" />
        <CustomButton action="Suporte" bgColor="green" />
      </div>
      <Footer />
    </>
  );
};

export default Main;
