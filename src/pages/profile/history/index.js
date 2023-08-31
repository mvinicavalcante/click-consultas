import React, { useState } from "react";
import UserHistory from "../../../components/userHistory";

const History = () => {

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

  const [arrayHistory] = useState([
    {
      id:1,
      medico:{
        nome:"Reginaldo Silvestre",
        especialidade:"Cardiologia"
      },
      paciente:{
        nome:"Matheus Araujo"
      },
      data: "25/05/2023",
      hora: "14:50",
      endereco: {
        cidade:"Garanhuns",
        estado:"Pernambuco",
        cep:"12345-365",
        bairro:"Boa Vista",
        logradouro:"Av Bom Pastor",
        numero: "n/a"
      },
      valor:"149,00",
      status:"avaliado"
    },
    {
      id:2,
      medico:{
        nome:"Reginaldo Silvestre",
        especialidade:"Neurologia"
      },
      paciente:{
        nome:"Josefa Rodrigues"
      },
      data: "28/05/2023",
      hora: "15:50",
      endereco: {
        cidade:"Garanhuns",
        estado:"Pernambuco",
        cep:"12345-365",
        bairro:"Parque Fenix",
        logradouro:"Av. Cristovão Colombo",
        numero: "1438"
      },
      valor:"215,00",
      status:"disponivel"
    }
  ])

    return (
        <UserHistory type={userDefault.tipo} content={arrayHistory} />
    )
  };

export default History;