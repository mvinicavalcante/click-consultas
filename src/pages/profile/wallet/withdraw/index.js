import { useEffect, useState } from "react";
import FinishingSide from "../../../../components/finishingSide";
import CustomButton from "../../../../components/customButton";
import FormInput from "../../../../components/form/formInput";
import UserService from "../../../../services/UserService";
import WithdrawService from "../../../../services/WithdrawService";
import { toast } from "react-toastify";

const Withdraw = () => {
  const [account, setAccount] = useState();
  const [value, setValue] = useState();
  const [pixs, setPixs] = useState([]);

  useEffect(() => {
    UserService.getAllPixByUserId(sessionStorage.patientId ?? sessionStorage.doctorId)
      .then(e => {
        setPixs(e.data);
      })
      .catch(e => {
        console.error(e.response.data)
      });
  }, []);

  const saque = {
    valor: value,
    chavePix: { id: account }
  }

  function formSubmit(e) {
    e.preventDefault();
    WithdrawService.registerWithdraw(sessionStorage.patientId ?? sessionStorage.doctorId, saque)
      .then(e => {
        toast.success("Saque realizado com sucesso");
        setTimeout(() => {
          window.location.href = "/perfil/carteira"
        }, 1500);
      })
      .catch(e => {
        toast.error(e.response.data);
      })
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8">
          <div className="row h-75">
            <div className="col-12 pt-5 mb-5 mb-md-0">
              <h2 className="text-center">Saque</h2>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center mb-5 mb-md-0">
              <CustomButton action="Adicionar pix para saque" path="/perfil/carteira/saque/conta-destino" />
            </div>
            <form onSubmit={formSubmit} className="col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="col-7 col-lg-6 col-xl-4 mb-4">
                <select onChange={(e) => setAccount(e.target.value)} className="form-select" required>
                  <option selected disabled>-- Selecione o pix para saque --</option>
                  {pixs?.map((pix, key) => (
                    <option key={key} value={pix.id}>
                      {pix.chave}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-7 col-lg-6 col-xl-4">
                <FormInput
                  label="Valor"
                  type={"number"}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </div>
              <button type="submit" id="submit-button" />
            </form>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <FinishingSide icon="fa-solid fa-wallet" action="Confirmar" />
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
