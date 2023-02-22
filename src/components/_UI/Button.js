import "./Button.css";

// presloženi gumb
const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className="customButton"
    >
      {props.text}
    </button>
  );
};

export default Button;
