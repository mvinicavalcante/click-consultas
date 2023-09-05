import "./styles.css";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ className, action, path, bgColor, type }) => {
  const navigate = useNavigate();

  function redirectToPage() {
    if (path)
      navigate(path);
  }

  let buttonStyle;

  if (bgColor === "green")
    buttonStyle = {
      color: "white",
      backgroundColor: "#00BF63"
    }
  if (bgColor === "light green")
    buttonStyle = {
      color: "white",
      backgroundColor: "#05DA73"
    };
  if (bgColor === "gray")
    buttonStyle = {
      color: "white",
      backgroundColor: "#A9A9A9"
    };

  return (
    <button className={`${className} custom-button rounded-5`} onClick={redirectToPage} style={buttonStyle} type={type}>
      {action}
    </button>
  );
};

export default CustomButton;
