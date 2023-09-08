import { useState } from "react";
import { toast } from "react-toastify";
import FinishingSide from "../../../../../components/finishingSide";
import FormInput from "../../../../../components/form/formInput";
import UserService from "../../../../../services/UserService";
import BackIcon from "../../../../../components/backIcon";
import { useNavigate } from "react-router-dom";

const NewAccount = () => {
  const [pixType, setPixType] = useState();
  const [pixKey, setPixKey] = useState();
  const navigate = useNavigate();

  const pix = {
    chave: pixKey,
    tipo: pixType
  }

  function formSubmit(e) {
    e.preventDefault();
    UserService.registerPix(sessionStorage.patientId ?? sessionStorage.doctorId, pix)
      .then(e => {
        toast.success("Pix adicionado com sucesso.")
        setTimeout(() => {
          navigate("/perfil/carteira/saque");
        }, 1500);
      })
      .catch(e => {
        toast.error(e.response.data)
      });
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8">
          <BackIcon color="white" />
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Conta Destino</h2>
            </div>
            <form onSubmit={formSubmit} className="mt-5 mt-md-0 col-12 d-flex flex-column justify-content-center align-items-center">
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
                  onChange={(e) => setPixKey(e.target.value)}
                  value={pixKey}
                />
              </div>
              <button type="submit" id="submit-button" />
            </form>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <FinishingSide icon="fa-solid fa-wallet" action="Adicionar" />
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
