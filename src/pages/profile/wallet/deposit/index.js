import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../../../components/form/formInput";
import CustomButton from "../../../../components/customButton";
import DepositService from "../../../../services/DepositService";
import { toast } from "react-toastify";
import BackIcon from "../../../../components/backIcon";

const Deposit = () => {
  const [value, setValue] = useState();

  function submitForm(e) {
    e.preventDefault();

    DepositService.registerDeposit(sessionStorage.patientId ?? sessionStorage.doctorId, { valor: value })
      .then(e => {
        toast.success("Depósito realizado com sucesso.");
        setTimeout(() => {
          window.location.href = "/perfil/carteira"
        }, 1500);
      })
      .catch(e => {
        toast.error(e.response.data);
      });
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <form onSubmit={submitForm} className="col-logo col-12 col-md-8">
          <BackIcon color="white" />
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
              <CustomButton action="Gerar QR Code" type={"submit"} />
            </div>
          </div>
        </form>
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faWallet} size="8x" color="#1E3050" />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
