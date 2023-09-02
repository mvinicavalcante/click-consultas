import "./styles.css";

const CustomButton = ({ className, action, path, bgColor, type }) => {
  function redirectToPage() {
    if (path)
      window.location.href = path;
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
