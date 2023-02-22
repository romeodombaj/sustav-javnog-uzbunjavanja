import "./RegionManagment.css";
import RegionList from "./Regions/RegionList";
import React, { useState } from "react";
import AddRegion from "./AddRegionComponents/AddRegion";

// panel regija/grupa gdje mozemo grupirati sirene po zelji **nedovrseno

const RegionManagment = (props) => {
  const [isAddingRegion, setIsAddingRegion] = useState(false);

  const onAddRegionHandler = () => {
    setIsAddingRegion(true);
  };

  const printAll = () => {
    console.log(...props.sirenInfo);
  };

  return (
    <div>
      <h1>REGION CONTROL</h1>
      <RegionList sirenInfo={props.sirenInfo}></RegionList>
      <button onClick={printAll}>HELLO</button>
      <button onClick={onAddRegionHandler}>ADD REGION</button>
      {isAddingRegion && <AddRegion sirenInfo={props.sirenInfo2}></AddRegion>}
    </div>
  );
};

export default RegionManagment;
