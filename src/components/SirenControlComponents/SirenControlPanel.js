import "./SirenControlPanel.css";
import TownButtonList from "./SirenComponents/TownButtonList";
import AutoTest from "./AutoTestComponents/AutoTest";
import SirenTypeFilter from "./SirenComponents/SirenTypeFilter";
import React, { useState } from "react";
import Button from "../_UI/Button";
import NewSiren from "./NewSirenComponents/NewSiren";
import SirenActiveSoundType from "./SirenActiveSoundType";

const SirenControlPanel = (props) => {
  const [typeFilterValue, setTypeFilterValue] = useState(0);
  const [fUpdate, setFUpdate] = useState(false);

  // dohvaćanje vrijendosti filtera
  const typeFilterHandler = (e) => {
    setTypeFilterValue(e);
  };

  // gumb za aktiviranje testa svake prve subote
  const activateTest = () => {
    props.sirenInfo.map((siren) => {
      return (siren.activity = true), (siren.sound = "2");
    });

    setFUpdate((prevState) => !prevState);
  };

  // gumb za aktiviranje svih sirena
  const onActivateAllHandler = () => {
    props.sirenInfo.map((siren) => {
      return (
        (siren.activity = true), (siren.sound = typeFilterValue.toString())
      );
    });

    setFUpdate((prevState) => !prevState);
  };

  // gumb za deaktiviranje svih sirena
  const onDeactivateAllHandler = () => {
    props.sirenInfo.map((siren) => {
      return (siren.activity = false);
    });
    setFUpdate((prevState) => !prevState);
  };

  // Prikazuje Control Panel
  return (
    <div className="controlPanelContainer">
      <h2>Control Panel</h2>
      <AutoTest
        activate={activateTest}
        deactivate={onDeactivateAllHandler}
        sirenInfo={props.sirenInfo}
        typeFilterValue={typeFilterValue}
      ></AutoTest>
      <div className="gridContainer">
        <div className="functionContainer">
          <NewSiren triggerDataRefresh={props.triggerDataRefresh}></NewSiren>
          <div>
            <SirenTypeFilter
              getFilterValue={typeFilterHandler}
            ></SirenTypeFilter>
            <div>
              <Button
                onClick={onActivateAllHandler}
                text="ACTIVATE ALL"
              ></Button>
              <Button
                onClick={onDeactivateAllHandler}
                text="DEACTIVATE ALL"
              ></Button>
            </div>
          </div>
          <SirenActiveSoundType className="connectColumns"></SirenActiveSoundType>
        </div>
      </div>

      <TownButtonList
        sirenInfo={props.sirenInfo}
        typeFilterValue={typeFilterValue}
      ></TownButtonList>
    </div>
  );
};

export default SirenControlPanel;
