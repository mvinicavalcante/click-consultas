import "./styles.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../../components/customButton";
import UserService from "../../../services/UserService";
import ShowPix from "../../../components/modal/showPix";
import BackIcon from "../../../components/backIcon";

const Wallet = () => {
  const [balanceVisibility, setBalanceVisibility] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [carteira, setCarteira] = useState();
  const [pix, setPix] = useState();

  useEffect(() => {
    UserService.getWalletById(
      sessionStorage.doctorId ?? sessionStorage.patientId
    )
      .then((e) => {
        setCarteira(e.data);
      })
      .catch((e) => {});
  }, []);

  useEffect(() => {
    UserService.getAllPixByUserId(
      sessionStorage.doctorId ?? sessionStorage.patientId
    )
      .then((e) => {
        setPix(e.data);
      })
      .catch((e) => {});
  }, []);

  function toggleBalanceVisibility() {
    setBalanceVisibility((prevState) => !prevState);
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <BackIcon />
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
                  {balanceVisibility ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={toggleBalanceVisibility}
                      className="balance-icon"
                      size="sm"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={toggleBalanceVisibility}
                      className="balance-icon"
                      size="sm"
                    />
                  )}
                </h2>
                <h2 className="text-center mt-4">
                  {balanceVisibility
                    ? `R$ ${carteira?.saldo.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}`
                    : "R$ - - - -"}
                </h2>
              </div>
            </div>
            <div className="col-12 row justify-content-center align-items-center">
              <div className="col-8 d-flex justify-content-center">
                <button
                  className="custom-button rounded-5"
                  onClick={() => setModalShow(true)}
                >
                  {" "}
                  Visualizar Chaves Pix
                </button>
              </div>
              <div className="col-12 row justify-content-center align-items-center">
                <div className="col-4 d-flex justify-content-center">
                  <CustomButton action="Sacar" path="/perfil/carteira/saque" />
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <CustomButton
                    action="Depositar"
                    path="/perfil/carteira/deposito"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowPix
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={pix}
      />
    </div>
  );
};

export default Wallet;
