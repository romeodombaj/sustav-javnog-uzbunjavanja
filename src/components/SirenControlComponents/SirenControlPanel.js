import "./SirenControlPanel.css";
import TownButtonList from "./SirenComponents/TownButtonList";
import AutoTest from "./AutoTestComponents/AutoTest";
import React, { useEffect } from "react";

const SirenControlPanel = (props) => {
  const passDataToApp = () => {
    props.getData();
  };

  //useEffect(() => console.log("hello2"), [props.sirenInfo]);

  return (
    <>
      <h2>Control Panel</h2>
      <AutoTest getData={passDataToApp} sirenInfo={props.sirenInfo}></AutoTest>
      <TownButtonList sirenInfo={props.sirenInfo}></TownButtonList>
    </>
  );
};

export default SirenControlPanel;
