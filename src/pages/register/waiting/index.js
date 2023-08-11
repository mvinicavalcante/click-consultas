import Logo from "../../../assets/logo.png";
import "./styles.css";

const WaitingPage = () => {
  return (
    <div class="col-logo vh-100 vw-100 d-flex flex-column align-items-center justify-content-center">
      <img src={Logo} class="img-fluid rounded-4 blink-logo" alt="Logo" />
      <p class="waiting mt-4">Aguardando confirmação...</p>
    </div>
  );
};

export default WaitingPage;