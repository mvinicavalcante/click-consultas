import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouseMedical, faPlus
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import AddressBox from "../../../components/addressBox";

const MainAddress = ({ type }) => {
 
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

  const [arrayEnderecos, setArrayEnderecos] = useState([
    {
      id: 1,
      apelido: "Vitalecer Clínica",
      bairro: "Heliópolis",
      numero: "219",
      cep: "55296-260",
      estado: "Pernambuco",
      logradouro: "Av. Frei Caneca",   
      cidade: "Garanhuns",
      detalhamento: "Clínica especializada"
    },
    {
      id: 2,
      apelido: "Clinica Sempre Bem",
      bairro: "Heliópolis",
      numero: "000",
      cep: " 55295-515",
      estado: "Pernambuco",
      logradouro: "Av. Frei Caneca",   
      cidade: "Garanhuns",
      detalhamento: "Clínico geral"
    },
    {
      id: 3,
      apelido: "Centro Médico Lagam II",
      bairro: "Heliópolis",
      numero: "180",
      cep: "55295-410",
      estado: "Pernambuco",
      logradouro: "Joaquim Távora",   
      cidade: "Garanhuns",
      detalhamento: "Clínica especializada"
    },
    {
      id: 4,
      apelido: "Centro Médico Ortocard",
      bairro: "Santo Antônio",
      numero: "175",
      cep: "55293-300",
      estado: "Pernambuco",
      logradouro: "Ver. Deusdedit Maia",   
      cidade: "Garanhuns",
      detalhamento: "Clínica especializada"
    },
    {
      id: 5,
      apelido: "S&A Clínica Médica",
      bairro: "Santo Antônio",
      numero: "175",
      cep: "55295-515",
      estado: "Pernambuco",
      logradouro: "Av. Frei Caneca",   
      cidade: "Garanhuns",
      detalhamento: "Policlínica"
    }
  ])

  const handleDeleteComponente = (id) => {
    const novoArray = arrayEnderecos.filter(comp => comp.id !== id);
    setArrayEnderecos(novoArray);
  };

  return (
    <>
      <div className="address">
        {userDefault.tipo === "medico" ? (
            <div className="container-fluid vh-100 vw-100 justify-content-center align-items-center">
              <div id="content" className="overflow-auto row vh-100">
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="col-12 col-md-6 my-3 m-md-0 d-flex justify-content-center">
                      <FontAwesomeIcon
                        icon={faHouseMedical}
                        color="#1E3050"
                        size="8x"
                        className="icon"
                      />
                  </div>
                </div>
                <div className="col-logo col-12 col-lg-8">
                  <div className="col-12 pt-5">
                    <h2 className="text-center">
                      Meus Endereços
                    </h2>
                  </div>
                  <div className="address-details">
                    <div className="add-schedule col-12 mt-3 text-left">
                      <button onClick={() => window.location.href="/principal/enderecos/criar"} className="add-address">
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="white"
                          className="icon"
                          width={65}
                        />
                      </button>
                    </div>
                    <div className="col-12 mt-4">
                      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                      {arrayEnderecos.map((endereco, index) => (
                        <div key={index} className="col">
                          <AddressBox id={endereco.id} content={endereco} onDelete={handleDeleteComponente}/>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


        ) :  (
          <></>
        )}
      </div>
    </>
  );
}

export default MainAddress;
