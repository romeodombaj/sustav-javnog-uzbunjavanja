import React, { useState, useEffect } from "react";
import "./TownToggleButton.css";

const TownToggleButton = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [singleTownClassName, setSingleTownClassName] =
    useState("singleTownButton");
  const [fUpdate, setFUpdate] = useState(false); // force update state
  
  const filterValue = [
    "singleTownButtonIsActive1",
    "singleTownButtonIsActive2",
    "singleTownButtonIsActive3",
    "singleTownButtonIsActive4",
  ];

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
