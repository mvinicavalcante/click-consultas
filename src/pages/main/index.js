import "./styles.css";

import Header from "../../components/header";
import CustomButton from "../../components/customButton";
import Footer from "../../components/footer";

const Main = () => {
  const userDefault = {
    tipo: "medico",
    nome: "João da Silva",
    cpf: "000.000.000-00",
    dataNascimento: "01/01/2000",
    sexo: "Masculino",
    email: "teste@ufape.com.br",
    telefone: "(00) 00000-0000",
    cidade: "Garanhuns",
    estado: "Pernambuco",
    senha: "123456",
  };

  return (
    <>
      <Header />
      <div className="main">
        <ul className="main-itens">
          {userDefault.tipo === "medico" ? (
            <>
              <li className="main-item">
                <CustomButton
                  action="Agendamentos"
                  path="/principal/busca"
                  bgColor="green"
                />
              </li>
              <li className="main-item">
                <CustomButton action="Suporte" bgColor="green" />
              </li>
              <li className="main-item">
                <CustomButton action="Agendas" bgColor="green" />
              </li>
              <li className="main-item">
                <CustomButton action="Endereços" bgColor="green" />
              </li>
            </>
          ) : (
            <>
              <li className="main-item">
                <CustomButton
                  action="Agendar"
                  path="/principal/busca"
                  bgColor="green"
                />
              </li>
              <li className="main-item">
                <CustomButton action="Agendamentos" bgColor="green" />
              </li>
              <li className="main-item">
                <CustomButton action="Suporte" bgColor="green" />
              </li>
            </>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Main;
