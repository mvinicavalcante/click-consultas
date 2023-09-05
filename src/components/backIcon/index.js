import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BackIcon = ({ color }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/principal")} className="back-icon" title="Voltar à página principal">
      <FontAwesomeIcon
        icon={faArrowLeft}
        color={color ?? "#1E3050"}
        size="3x"
      />
    </div>
  );
};

export default BackIcon;
