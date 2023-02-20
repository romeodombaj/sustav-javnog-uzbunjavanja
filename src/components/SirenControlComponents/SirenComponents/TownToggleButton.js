import React, { useState, useEffect } from "react";
import "./TownToggleButton.css";
import ErrorWindow from "../../_UI/ErrorWindow";

const TownToggleButton = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [singleTownClassName, setSingleTownClassName] =
    useState("singleTownButton");
  const [fUpdate, setFUpdate] = useState(false); // force update state
  const [triggerError, setTriggerError] = useState(false);

  const filterValue = [
    "singleTownButtonIsActive1",
    "singleTownButtonIsActive2",
    "singleTownButtonIsActive3",
    "singleTownButtonIsActive4",
  ];

  const onTriggerErrorWindow = () => {
    setTriggerError((prevState) => !prevState);
  };

  const onHoverHandler = () => {
    setIsHovering((prevState) => !prevState);
  };

  const changeActivityStatus = () => {
    props.sirenInfo.activity = !props.sirenInfo.activity;
    props.sirenInfo.sound = props.typeFilterValue.toString();
    setFUpdate((prevState) => !prevState);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/sirenInfo/" + props.sirenInfo.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activity: props.sirenInfo.activity,
        sound: props.sirenInfo.sound,
      }),
    });

    if (props.sirenInfo.state !== "radi" && props.sirenInfo.activity) {
      props.sirenInfo.activity = false;
      onTriggerErrorWindow();
    }

    if (props.sirenInfo.activity) {
      setSingleTownClassName(
        "singleTownButton " + filterValue[props.sirenInfo.sound]
      );
    } else {
      setSingleTownClassName("singleTownButton");
    }
  }, [props.sirenInfo.activity]);

  return (
    <div>
      {triggerError && (
        <ErrorWindow
          sirenInfo={props.sirenInfo}
          closeWindow={onTriggerErrorWindow}
        ></ErrorWindow>
      )}
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
