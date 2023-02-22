import React, { useState, useEffect } from "react";
import "./TownToggleButton.css";
import ErrorWindow from "../../_UI/ErrorWindow";

// Pojedinačna sirena - gumb

const TownToggleButton = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [singleTownClassName, setSingleTownClassName] =
    useState("singleTownButton");
  const [fUpdate, setFUpdate] = useState(false); // force update state
  const [triggerError, setTriggerError] = useState(false);

  //odreduje boju animacije ovisno o zvuku sirene
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

  // patchanje novih podataka aktivnosti i vrste zvuka, te trigger errora ako nešto ne radi,
  // vrsi se ako se podaci sirenInfo.activity promjene lokalno
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
