import "./styles.css";

const CustomButton = ({ action, path }) => {
  function redirectToPage() {
    window.location.href = path;
  }

  return (
    <button className="custom-button rounded-5" onClick={redirectToPage}>
      {action}
    </button>
  );
};

export default CustomButton;
