import "./SirenControlPanel.css";
import TownButtonList from "./SirenComponents/TownButtonList";
import AutoTest from "./AutoTestComponents/AutoTest";
import SirenTypeFilter from "./SirenComponents/SirenTypeFilter";
import React, { useState, useEffect } from "react";
import Button from "../_UI/Button";

const SirenControlPanel = (props) => {
  const [typeFilterValue, setTypeFilterValue] = useState(0);
  const [fUpdate, setFUpdate] = useState(false);

  const typeFilterHandler = (e) => {
    setTypeFilterValue(e);
    console.log(e);
  };

  const onActivateAllHandler = () => {
    props.sirenInfo.map((siren) => {
      siren.activity = true;
    });

    setFUpdate((prevState) => !prevState);
  };


  const onDeactivateAllHandler = () => {
    props.sirenInfo.map((siren) => {
      siren.activity = false;
    });
    setFUpdate((prevState) => !prevState);
  };

  return (
    <div className="controlPanelContainer">
      <h2>Control Panel</h2>
      <AutoTest
        sirenInfo={props.sirenInfo}
        typeFilterValue={typeFilterValue}
      ></AutoTest>
      <SirenTypeFilter getFilterValue={typeFilterHandler}></SirenTypeFilter>
      <div>
        <Button onClick={onActivateAllHandler} text="ACTIVATE ALL"></Button>
        <Button onClick={onDeactivateAllHandler} text="DEACTIVATE ALL"></Button>
      </div>
      <TownButtonList
        sirenInfo={props.sirenInfo}
        typeFilterValue={typeFilterValue}
      ></TownButtonList>
    </div>
  );
};

export default SirenControlPanel;
