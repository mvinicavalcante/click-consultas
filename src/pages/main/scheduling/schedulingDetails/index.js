import "./styles.css";
import React from "react";

import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import CustomButton from "../../../../components/customButton";

const SchedulingDetails = () => {
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

  const content = {
    id: 1,
    tipoConsulta: "Primeira consulta",
    planoDeSaude: null,
    valorFinalConsulta: 300.0,
    detalhamento: "Sinto dores ao...",
    horarioAgendado: {
        id: 1,
        data: "2023-09-01",
        hora: "08:00:00"
    },
    paciente: {
        id: 1,
        nome: "Antônio Fernando",
    },
    agenda: {
        id: 2,
        especialidadeMedica: "Cardiologia",
        tiposConsulta: [
            "Revisão"
        ],
        planosAtendidos: [
            "Unimed",
            "Dunimed"
        ],
        valorConsulta: 100.0,
        contato: "(87)99630-5841",
        medico: {
            id: 8,
            nome: "Maria Gertrudes",
            telefone: "34567890123",
        }
    },
      localConsulta: {
          id: 3,
          cidade: "Bom Conselho",
          estado: "PE",
          cep: "55330-000",
          bairro: "Centro",
          logradouro: "Prof Raimundo Donato",
          numero: 6,
          complemento: "Ao lado da rua B",
          apelido: "Endereco 2"
      }
  }

  return (
    <div className="p-0 overflow-hidden">
      <Header />
      <div className="container scheduling d-flex flex-column">
        <>
          <div className="scheduling-title mb-3">
            <h3>Consulta Agendada</h3>
          </div>
          {userDefault.tipo === "medico" ? (
            <div className="details">
              <h4>{content.paciente.nome}</h4>

              <div className="details-column">
                <div className="detail-column">
                  <div>
                    <p className="details-text">{content.tipoConsulta}</p>
                  </div>
                  <div>
                    <p className="details-text">Informações Adicionais:</p>
                    <div>
                      <p className="details-description">{content.detalhamento}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="details-text">{content.localConsulta.apelido}</p>
                    <div>
                      <p className="details-description">{content.agenda.contato}</p>
                      <p className="details-description">{content.localConsulta.logradouro}, {content.localConsulta.numero}</p>
                      <p className="details-description">{content.localConsulta.cidade}, {content.localConsulta.estado}</p>
                      <p className="details-description">{content.horarioAgendado.data}, {content.horarioAgendado.hora}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="details-text">Valor da consulta:</p>
                    <div className="details-description">
                      <h4>R$ {content.valorFinalConsulta}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cancel-button">
                <CustomButton
                  className=""
                  action="Cancelar consulta"
                  path="/principal/agendamentos"
                  bgColor="red"
                />
              </div>
            </div>
          ) : (
            <div className="details">
              <h4>{content.agenda.medico.nome}</h4>

              <div className="details-column">
                <div className="doctor-container">
                  <div>
                    <p className="details-text">{content.localConsulta.apelido}</p>
                    <div>
                    <p className="details-description">{content.agenda.contato}</p>
                      <p className="details-description">{content.localConsulta.logradouro}, {content.localConsulta.numero}</p>
                      <p className="details-description">{content.localConsulta.cidade}, {content.localConsulta.estado}</p>
                      <p className="details-description">{content.horarioAgendado.data}, {content.horarioAgendado.hora}</p>
                    </div>
                  </div>
                </div>
                <div className="detail-column">
                  <div>
                    <p className="details-text">{content.tipoConsulta}</p>
                  </div>
                  <div>
                    <p className="details-text">Informações Adicionais:</p>
                    <div>
                      <p className="details-description">{content.detalhamento}</p>
                    </div>
                  </div>
                </div>
                <div className="detail-column">
                  <div>
                    <p className="details-text">Valor da consulta:</p>
                    <div className="details-description">
                      <h4>R$ {content.valorFinal}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cancel-button">
                <CustomButton
                  className=""
                  action="Cancelar consulta"
                  path="/principal/agendamentos"
                  bgColor="red"
                />
              </div>
            </div>
          )}
        </>
      </div>
      <Footer />
    </div>
  );
};

export default SchedulingDetails;
