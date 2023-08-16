import { useState } from "react";
import FinishingSide from "../../../../components/finishingSide";
import CustomButton from "../../../../components/customButton";
import FormInput from "../../../../components/form/formInput";

const Withdraw = () => {
  const [account, setAccount] = useState();
  const [value, setValue] = useState();

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8">
          <div className="row h-75">
            <div className="col-12 pt-5 mb-5 mb-md-0">
              <h2 className="text-center">Saque</h2>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center mb-5 mb-md-0">
              <CustomButton action="Adicionar conta destino" path="/carteira/saque/conta-destino" />
            </div>
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="col-7 col-lg-6 col-xl-4 mb-4">
                <FormInput
                  label="Conta"
                  onChange={(e) => setAccount(e.target.value)}
                  value={account}
                />
              </div>
              <div className="col-7 col-lg-6 col-xl-4">
                <FormInput
                  label="Valor"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <FinishingSide icon="fa-solid fa-wallet" action="Confirmar" path="#" />
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
