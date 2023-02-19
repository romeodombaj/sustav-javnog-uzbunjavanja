import React, { useState, useEffect } from "react";
import "./TownToggleButton.css";

const TownToggleButton = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [townFullClass, setTownFullClass] = useState("singleTownButton");
  const [singleTownClassName, setSingleTownClassName] =
    useState("singleTownButton");
  const [fUpdate, setFUpdate] = useState(false); // force update state
  const [prevButtonState, setPrevButtonState] = useState(5);

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
    if (props.typeFilterValue == prevButtonState) {
      props.sirenInfo.activity = !props.sirenInfo.activity;
      setFUpdate((prevState) => !prevState);
    } else {
      setSingleTownClassName(
        "singleTownButton " + filterValue[props.typeFilterValue]
      );
      setPrevButtonState(props.typeFilterValue);
    }
  };

  useEffect(() => {
    if (props.sirenInfo.activity) {
      setSingleTownClassName(
        "singleTownButton " + filterValue[props.typeFilterValue]
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
