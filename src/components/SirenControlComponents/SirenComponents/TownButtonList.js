import "./TownButtonList.css";
import TownToggleButton from "./TownToggleButton";
import React, { useEffect } from "react";
const TownButtonList = (props) => {

  return (
    <div>
      <div className="town-grid-container">
        {props.sirenInfo.map((siren) => {
          return (
            <TownToggleButton
              className="town-grid-item"
              key={siren.id}
              sirenInfo={siren}
              typeFilterValue={props.typeFilterValue}
              getData={props.getData}
            ></TownToggleButton>
          );
        })}
      </div>
    </div>
  );
};

export default TownButtonList;
