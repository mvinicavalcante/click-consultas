import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../../../components/form/formInput";
import CustomButton from "../../../../components/customButton";

const Deposit = () => {
  const [value, setValue] = useState();

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Depósito</h2>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="col-7 col-lg-6 col-xl-4">
                <FormInput
                  label="Valor"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-start">
              <CustomButton action="Gerar QR Code" path="#" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faWallet} size="8x" color="#1E3050" />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
