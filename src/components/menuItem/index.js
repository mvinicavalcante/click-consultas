import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserPen, faWallet, faClockRotateLeft, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

library.add(faUserPen, faWallet, faClockRotateLeft, faRightFromBracket);

const MenuItem = ({ title, icon, path }) => {
  const navigate = useNavigate();
  
  function redirectToPage() {
    if (path === "/sair")
    sessionStorage.clear();
  navigate(path);
}

  return (
    <div
      className="py-4 item-group rounded-4 text-center"
      onClick={redirectToPage}
    >
      <p className="item-title"> {title} </p>
      <p>
        <FontAwesomeIcon icon={icon} color="#00bf63" className="item-icon" />{" "}
      </p>
    </div>
  );
};

export default MenuItem;
