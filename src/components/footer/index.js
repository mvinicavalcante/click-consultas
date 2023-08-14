import "./styles.css";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";

const Footer = () => {
  function clickApp(app) {
    if (app === "Instagram") {
      alert("Instagram");
      return;
    }
    if (app === "Facebook") {
      alert("Facebook");
      return;
    } else {
      alert("Twitter");
      return;
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-2">
            <ul>
              <li className="li-footer">Página inicial</li>
              <li className="li-footer">Termos do sistema</li>
              <li className="li-footer">Verificação médica</li>
            </ul>
          </div>
          <div className="col-md-4 p-2">
            <ul>
              <li className="li-footer">Quem somos?</li>
              <li className="li-footer">Fale conosco</li>
              <li className="li-footer">Contato: sac@clickconsultas.com</li>
            </ul>
          </div>
          <div className="col-md-4 p-2 d-flex align-items-center">
            <ul>
              <li className="li-footer">
                <label className="icons">
                  <img
                    src={Instagram}
                    onClick={() => clickApp("Instagram")}
                    width={25}
                  />{" "}
                </label>
                <label className="icons">
                  <img
                    src={Facebook}
                    onClick={() => clickApp("Facebook")}
                    width={15}
                  />{" "}
                </label>
                <label className="icons">
                  <img
                    src={Twitter}
                    onClick={() => clickApp("Twitter")}
                    width={30}
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>
        <p className="p-footer">
          Click Consultas© Todos os direitos reservados - 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
