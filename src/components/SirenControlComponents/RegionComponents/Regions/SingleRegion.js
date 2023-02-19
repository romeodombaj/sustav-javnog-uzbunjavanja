import "./SingleRegion.css";
import React, { useEffect, useState } from "react";

const SingleRegion = (props) => {
  const [currentRegionNameList, setCurrentRegionNameList] = useState();
  const [buttonActiveStateClass, setButtonActiveStateClass] =
    useState("singleRegionButton");

  const [manualUpdate, setManualUpdate] = useState(false);

  const changePropsActivity = () => {
    props.sirenInfo.tempTownSirens.map(
      (siren) => (siren.activity = !siren.activity)
    );
    props.sirenInfo.activity = !props.sirenInfo.activity;
    setManualUpdate((prevState) => !prevState);
  };

  useEffect(() => {
    setCurrentRegionNameList(
      props.sirenInfo.tempTownSirens.map((siren) => siren.name + " ")
    );
    if (props.sirenInfo.activity) {
      setButtonActiveStateClass("singleRegionButton singleTownButtonIsActive");
    } else {
      setButtonActiveStateClass("singleRegionButton");
    }
  }, [props.sirenInfo.activity, props]);

  return (
    <div>
      <button onClick={changePropsActivity} className={buttonActiveStateClass}>
        {currentRegionNameList}
      </button>
    </div>
  );
};

export default SingleRegion;
