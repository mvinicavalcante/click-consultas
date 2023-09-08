import "./styles.css";

import { Spinner } from "react-bootstrap";
import Footer from "../../../../components/footer";
import Header from "../../../../components/header";
import { useEffect, useState } from "react";

import defaultAvatar from "../../../../assets/doctors/defaultAvatar.png";
import definedAvatar from "../../../../assets/doctors/image 11.png";
import CustomButton from "../../../../components/customButton";
import AssessmentService from "../../../../services/AssessmentService";

const DoctorSelected = () => {
  const [medicoSelecionado, setMedicoSelecionado] = useState();
  const [viewConsultorios, setViewConsultorios] = useState("consultorios");
  const [listOfReviews, setListOfReviews] = useState([]);

  useEffect(() => {
    const medicoFromSession = sessionStorage.getItem("medicoSelecionado");
    if (medicoFromSession) {
      const parsedMedico = JSON.parse(medicoFromSession);
      setMedicoSelecionado(parsedMedico);
    }
  }, []);

  async function listarAvaliacoes(id) {
    try {
      const response = await AssessmentService.getAllReviewsByRecordId(id);
      const data = response.data; // Assumindo que a resposta contém os dados das avaliações
      setListOfReviews(data);
    } catch (error) {
      console.error("Erro ao buscar avaliações:", error);
    }
  }

  function navAction(action) {
    const consultorios = document.getElementById("consultorios");
    const avaliacoes = document.getElementById("avaliacoes");
    if (action === "consultorios") {
      consultorios.classList.add("active");
      avaliacoes.classList.remove("active");
      setViewConsultorios("consultorios");
    } else if (action === "avaliacoes") {
      consultorios.classList.remove("active");
      avaliacoes.classList.add("active");
      setViewConsultorios("avaliacoes");
      listarAvaliacoes(medicoSelecionado.id);
    }
  }

  console.log(listOfReviews);

  return (
    <>
      <Header />
      <div className="container">
        {medicoSelecionado ? (
          <div className="doctor-selected-container mt-4 mb-5">
            {/* ---  Início do "header" de informações  --- */}
            <div
              id="card-header"
              className="row align-items-center justify-content-between p-5"
            >
              <div className="col-md-5 col-sm-5">
                {medicoSelecionado.foto ? (
                  <img src={definedAvatar} alt={medicoSelecionado.nome} />
                ) : (
                  <img src={defaultAvatar} alt={medicoSelecionado.nome} />
                )}
              </div>
              <div className="col-md-7 col-sm-7 info-header-doctor">
                <h1>{medicoSelecionado.nome}</h1>
                {medicoSelecionado.especialidades.map((especialidade) => (
                  <h5 className="speciality">{especialidade.nome}</h5>
                ))}
                <CustomButton
                  bgColor={"green"}
                  action={"Agendar"}
                  path={"/principal/confirmar-consulta"}
                />
              </div>
            </div>
            {/* ---  Fim do "header" de informações  --- */}
            <div className="d-flex flex-column nav-doctor">
              <nav className="col-12 mt-3 mb-4 text-center">
                <span
                  onClick={() => navAction("consultorios")}
                  id="consultorios"
                  className="nav-item active"
                >
                  Consultórios
                </span>
                <span
                  onClick={() => {
                    navAction("avaliacoes");
                  }}
                  id="avaliacoes"
                  className="nav-item"
                >
                  Avaliações
                </span>
              </nav>
              <div>
                {viewConsultorios === "consultorios" ? (
                  <div className="info">
                    {medicoSelecionado.enderecos.map((endereco, index) => {
                      return (
                        <div className="info-content mb-4" key={index}>
                          <h3>{endereco.apelido}</h3>
                          <h5 className="endereco">
                            {endereco.logradouro}, {endereco.numero},{" "}
                            {endereco.bairro}, {endereco.cidade},{" "}
                            {endereco.estado}
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="info-content mb-4">
                    <h5 className="endereco">
                      Número de avaliações: {listOfReviews.length}
                    </h5>
                    <h5 className="endereco">
                      Média de avaliação:{" "}
                      {(
                        listOfReviews.reduce(
                          (total, review) =>
                            total + review.registro.totalAvaliacoes,
                          0
                        ) /
                        (listOfReviews.length * 2)
                      ).toFixed(1)}
                      /5
                    </h5>
                    {listOfReviews.map((review) => (
                      <div className="card-commentary" key={review.id}>
                        <h5>{review.paciente.nome}</h5>
                        <p>{review.comentario}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </>
  );
};

export default DoctorSelected;
