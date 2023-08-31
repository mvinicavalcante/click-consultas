import { useState } from "react";
import FormInput from "../form/formInput";
import FinishingSide from "../finishingSide";

const AddressDetails = ({type}) => {
  const [bairro, setBairro] = useState();
  const [numero, setNumero] = useState();
  const [cep, setCep] = useState();
  const [estado, setEstado] = useState();  
  const [logradouro, setLogradouro] = useState();  
  const [complemento, setComplemento] = useState(); 
  const [cidade, setCidade] = useState();
  const [detalhamento, setDetalhamento] = useState();
  const [apelido, setApelido] = useState();

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-flex-start">
          <div className="row w-100 px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-flex-start mt-5">
            <div className="col-8 col-md-6 pt-3 pt-md-0"> 
              <FormInput
                label={"Bairro"}
                onChange={(e) => setBairro(e.target.value)}
                value={bairro}
              />
              <FormInput
                label={"Número"}
                onChange={(e) => setNumero(e.target.value)}
                value={numero}
              />
              <FormInput
                label={"CEP"}
                onChange={(e) => setCep(e.target.value)}
                value={cep}
              />
              <FormInput
                label={"Estado"}
                onChange={(e) => setEstado(e.target.value)}
                value={estado}
              />
              <FormInput
                label={"Apelido"}
                onChange={(e) => setApelido(e.target.value)}
                value={apelido}
              />
            </div>
            <div className="col-8 col-md-6 ">
              <FormInput
                label={"Logradouro"}
                onChange={(e) => setLogradouro(e.target.value)}
                value={logradouro}
              />
              <FormInput
                label={"Complemento"}
                onChange={(e) => setComplemento(e.target.value)}
                value={complemento}
              />
              <FormInput
                label={"Cidade"}
                onChange={(e) => setCidade(e.target.value)}
                value={cidade}
              />
              <FormInput
                label={"Detalhamento"}
                onChange={(e) => setDetalhamento(e.target.value)}
                value={detalhamento}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center pt-3 pt-md-0">
          <FinishingSide icon="house-medical" path="/principal/enderecos" action={type} />
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;