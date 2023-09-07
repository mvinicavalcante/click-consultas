import "./styles.css";

import Header from "../../components/header";
import CustomButton from "../../components/customButton";
import Footer from "../../components/footer";

const Main = () => {
  return (
    <div className="p-0 overflow-hidden">
      <Header />
      <div className="main">
        {sessionStorage.doctorId ? (
          <>
            <ul className="main-itens">
              <li className="main-item">
                <CustomButton
                className ="main-button"
                action="Minhas agendas"
                path="/principal/agendas"
                bgColor="green" />
              </li>
              <li className="main-item">
                <CustomButton 
                  className ="main-button" 
                  action="Meus endereços" 
                  path="/principal/enderecos"
                  bgColor="green" 
                />
              </li>
            </ul>
            <ul className="main-itens">
              <li className="main-item">
                <CustomButton
                  className ="main-button"
                  action="Agendamentos"
                  path="/principal/agendamentos"
                  bgColor="green"
                />
              </li>
              <li className="main-item">
                <CustomButton className ="main-button" action="Suporte" bgColor="green" />
              </li>
            </ul>
          </>
        ) : (
          <>
            <li className="main-item">
              <CustomButton
                className ="main-button"
                action="Agendar consulta"
                path="/principal/busca"
                bgColor="green"
              />
            </li>
            <li className="main-item">
              <CustomButton
                className ="main-button"
                action="Agendamentos"
                path="/principal/agendamentos"
                bgColor="green"
              />
            </li>
            <li className="main-item">
              <CustomButton className ="main-button" action="Suporte" bgColor="green" />
            </li>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
