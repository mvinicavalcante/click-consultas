import "./styles.css";

import Header from "../../components/header";
import CustomButton from "../../components/customButton";
import Footer from "../../components/footer";

const Main = () => {
  const userDefault = {
    tipo: "paciente",
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
        {userDefault.tipo === "medico" ? (
          <>
            <ul className="main-itens">
              <li className="main-item">
                <CustomButton action="Minhas agendas" bgColor="green" />
              </li>
              <li className="main-item">
                <CustomButton action="Meus endereços" bgColor="green" />
              </li>
            </ul>
            <ul className="main-itens">
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
            </ul>
          </>
        ) : (
          <>
            <li className="main-item">
              <CustomButton
                action="Agendar consulta"
                path="/principal/busca"
                bgColor="green"
              />
            </li>
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
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Main;
