import React, { useState, useEffect } from "react";
import "./TownToggleButton.css";

const TownToggleButton = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(props.sirenInfo.activity);
  const [townFullClass, setTownFullClass] = useState("singleTownButton");

  let singleTownClassName = "singleTownButton";
  const singleTownClassNameActive = "singleTownButton isActive";

  const onHoverHandler = () => {
    setIsHovering((prevState) => !prevState);
  };

  const changeActivityStatus = () => {
    setIsActive((prevState) => !prevState);
    props.sirenInfo.activity = !isActive;
  };

  if (props.sirenInfo.activity == true) {
    singleTownClassName = "singleTownButton isActive";
  } else {
    singleTownClassName = "singleTownButton";
  }

  return (
    <div>
      <button
        onMouseLeave={onHoverHandler}
        onClick={changeActivityStatus}
        className={singleTownClassName}
      >
        {props.sirenInfo.name}
      </button>
    </div>
  );
};

export default TownToggleButton;
