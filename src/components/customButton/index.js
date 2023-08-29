import "./styles.css";

const CustomButton = ({ className, action, path, bgColor }) => {
  function redirectToPage() {
    window.location.href = path;
  }

  let buttonStyle;

  if (bgColor === "green")
    buttonStyle = {
      color: "white",
      backgroundColor: "#00BF63"
    };

  return (
    <button className={`${className} custom-button rounded-5`} onClick={redirectToPage} style={buttonStyle}>
      {action}
    </button>
  );
};

export default CustomButton;
