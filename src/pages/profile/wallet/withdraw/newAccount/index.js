import { useState } from "react";
import FinishingSide from "../../../../../components/finishingSide";
import FormInput from "../../../../../components/form/formInput";

const NewAccount = () => {
  const [pixType, setPixType] = useState();
  const [pix, setPix] = useState();

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Conta Destino</h2>
            </div>
            <div className="mt-5 mt-md-0 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="col-7 col-lg-6 col-xl-4 mb-4">
                <FormInput
                  label="Tipo da Chave"
                  type="pixType"
                  onChange={(e) => setPixType(e.target.value)}
                  value={pixType}
                />
              </div>
              <div className="col-7 col-lg-6 col-xl-4">
                <FormInput
                  label="Pix"
                  onChange={(e) => setPix(e.target.value)}
                  value={pix}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <FinishingSide icon="fa-solid fa-wallet" action="Adicionar" path="/carteira/saque" />
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
