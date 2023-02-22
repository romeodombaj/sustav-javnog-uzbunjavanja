import "./ErrorWindow.css";

// prozor koji se prikazuje ako sirena ne radi kako treba

const ErrorWindow = (props) => {
  return (
    <div>
      <div className="errorBackdrop" onClick={props.closeWindow}>
        <div className="errorWindow">
          <div className="errorMessage">! ERROR MESSAGE !</div>
          <div className="errorMessage errorInfo">
            Sirena {props.sirenInfo.name}
          </div>
          <div className="errorMessage errorInfo">{props.sirenInfo.state}</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorWindow;
