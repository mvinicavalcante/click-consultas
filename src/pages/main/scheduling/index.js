import "./styles.css";
import React, { useState } from "react";

import Header from "../../../components/header";
import SchedulingBox from "../../../components/scheduling/schedulingBox"
import Footer from "../../../components/footer";

const MainSheduling = () => {
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

  const [arrayAgendamentos, setArrayAgendamentos] = useState([

    {
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
    },
    {
      id: 2,
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
        nome: "Antônio",
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
    },
    {
      id: 3,
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

  ])

  return (
    <div className="p-0 overflow-hidden">
      <Header />
      <div className="container scheduling d-flex flex-column">
        <>
          <div className="scheduling-title mb-3">
            <h3>Agendamentos</h3>
          </div>
          <div>
            {arrayAgendamentos.map((agendamento, index) => (
              <div key={index} className="col mb-2">
                <SchedulingBox content={agendamento} type={userDefault.tipo} id={agendamento.id} />
              </div>
            ))}
          </div>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default MainSheduling;
