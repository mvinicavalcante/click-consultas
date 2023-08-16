import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../../components/customButton";

import "./styles.css"

const Wallet = () => {
  const [balanceVisibility, setBalanceVisibility] = useState(true);

  function toggleBalanceVisibility() {
    setBalanceVisibility((prevState) => !prevState);
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faWallet} size="8x" color="#1E3050" />
        </div>

        <div className="col-logo col-12 col-lg-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Carteira</h2>
            </div>
            <div className="col-12 row">
              <div className="col-6 d-flex flex-column">
                <h2 className="text-center">
                  Saldo:
                  {balanceVisibility ?
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={toggleBalanceVisibility}
                      className="balance-icon"
                      size="sm"
                    />
                    :
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={toggleBalanceVisibility}
                      className="balance-icon"
                      size="sm"
                    />
                  }
                </h2>
                <h2 className="text-center mt-4">
                  {balanceVisibility ?
                    "R$ 1.000" : "R$ - - - -"
                  }
                </h2>
              </div>
            </div>
            <div className="col-12 row justify-content-center align-items-center">
              <div className="col-4 d-flex justify-content-center">
                <CustomButton action="Sacar" path="/carteira/saque" />
              </div>
              <div className="col-4 d-flex justify-content-center" >
                <CustomButton action="Depositar" path="/carteira/deposito" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
