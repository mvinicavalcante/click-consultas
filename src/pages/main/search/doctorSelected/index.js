import "./styles.css";

import { Spinner } from "react-bootstrap";
import Footer from "../../../../components/footer";
import Header from "../../../../components/header";
import { useEffect, useState } from "react";

import defaultAvatar from "../../../../assets/doctors/defaultAvatar.png";
import CustomButton from "../../../../components/customButton";
import AssessmentService from "../../../../services/AssessmentService";
import ScheduleService from "../../../../services/ScheduleService";
import DoctorService from "../../../../services/DoctorService";

const DoctorSelected = () => {
  const [medicoSelecionado, setMedicoSelecionado] = useState();
  const [agendas, setAgendas] = useState();
  const [doctorPhoto, setDoctorPhoto] = useState();
  const [viewConsultorios, setViewConsultorios] = useState("consultorios");
  const [listOfReviews, setListOfReviews] = useState([]);

  useEffect(() => {
    const medicoFromSession = sessionStorage.getItem("medicoSelecionado");
    if (medicoFromSession) {
      const parsedMedico = JSON.parse(medicoFromSession);
      setMedicoSelecionado(parsedMedico);
    }

    ScheduleService.getAllByDoctorId(JSON.parse(medicoFromSession)?.id)
      .then(e => {
        setAgendas(e.data)
      })
      .catch(e => { })

    DoctorService.getProfilePhotoByDoctorId(JSON.parse(medicoFromSession)?.id)
      .then((response) => {
        const contentType = response.headers['content-type'];
        const arrayBufferView = new Uint8Array(response.data);
        const blob = new Blob([arrayBufferView], { type: contentType });
        const photoUrl = URL.createObjectURL(blob);
        sessionStorage.setItem("fotoMedicoSelecionado", photoUrl);
        setDoctorPhoto(photoUrl);
      })
      .catch((e) => { });

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
                {doctorPhoto ? (
                  <img src={doctorPhoto} width={250} className="rounded-5 border border-secondary" alt={medicoSelecionado.nome} />
                ) : (
                  <img src={defaultAvatar} alt={medicoSelecionado.nome} />
                )}
              </div>
              <div className="col-md-7 col-sm-7 info-header-doctor">
                <h1>Dr. {medicoSelecionado.nome}</h1>
                {medicoSelecionado.especialidades.map((especialidade) => (
                  <h5 className="speciality">{especialidade.nome}</h5>
                ))}
              </div>
            </div>
            {/* ---  Fim do "header" de informações  --- */}
            <div className="d-flex flex-column nav-doctor">
              <nav className="col-12 mt-3 mb-4 text-center">
                <span
                  onClick={() => navAction("consultorios")}
                  id="consultorios"
                  className="nav-item active text-bold"
                >
                  Consultórios
                </span>
                <span
                  onClick={() => {
                    navAction("avaliacoes");
                  }}
                  id="avaliacoes"
                  className="nav-item text-bold"
                >
                  Avaliações
                </span>
              </nav>
              <div>
                {viewConsultorios === "consultorios" ? (
                  <div className="info mt-3">
                    {agendas?.map((agenda, index) => {
                      return (
                        <div className="info-content mb-4 row border border-white rounded-4 p-3 mx-4" key={index}>
                          <div className="col-6 col-lg-5">
                            <h3>{agenda.especialidadeMedica}</h3>
                            <h5 className="endereco ms-2">
                              <h4>{agenda.enderecoMedico.apelido}</h4>
                              {agenda.enderecoMedico.logradouro}, {agenda.enderecoMedico.numero},{" "}
                              {agenda.enderecoMedico.bairro}, {agenda.enderecoMedico.cidade},{" "}
                              {agenda.enderecoMedico.estado}
                            </h5>
                          </div>
                          <div className="col-6 col-lg-4 align-self-center">
                            <h4>Atendimentos:</h4>
                            <div className="d-flex">
                              {agenda.horariosDisponiveis?.map((horarios) => {
                                return (
                                  <p className="me-4">{new Date(horarios.data).toLocaleDateString('pt-BR')}</p>
                                );
                              })}
                            </div>
                            <h5>Contato: {agenda.contato}</h5>
                          </div>
                          <div
                            className="col-12 col-lg-3 py-2 py-lg-0 text-center align-self-center"
                            onClick={() => sessionStorage.setItem("agendaSelecionada", JSON.stringify(agenda))}
                          >
                            <CustomButton
                              bgColor={"white"}
                              action={"Agendar"}
                              path={"/principal/confirmar-consulta"}
                              className={"px-5 m-0"}
                            />
                          </div>
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
                      {(medicoSelecionado.registroAvaliacao.totalAvaliacoes/medicoSelecionado.registroAvaliacao.numeroAvaliacoes).toFixed(2)}
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
