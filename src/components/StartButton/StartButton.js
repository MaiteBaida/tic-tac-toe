import "./StartButton.scss";

function Button({ onClick, label }) {
  return (
    <button onClick={onClick} className="start-button">
      {label}
    </button>
  );
}
export default Button;
