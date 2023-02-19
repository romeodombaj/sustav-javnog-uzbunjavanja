import "./App.css";
import SirenControlPanel from "./components/SirenControlComponents/SirenControlPanel";
import React, { useState, useEffect } from "react";
import Navbar from "./components/SirenControlComponents/Navbar";
import RegionManagment from "./components/SirenControlComponents/RegionComponents/RegionManagment";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const tempTownSirens = [
  { id: 1, name: "Pula", state: "radi", activity: false, soundType: "uzbuna" },
  {
    id: 2,
    name: "Rovinj",
    state: "radi",
    activity: false,
    soundType: "uzbuna",
  },
  {
    id: 3,
    name: "Umag",
    state: "radi",
    activity: false,
    soundType: "uzbuna",
  },
  {
    id: 5,
    name: "Poreč",
    state: "radi",
    activity: false,
    soundType: "uzbuna",
  },
  {
    id: 6,
    name: "Pazin",
    state: "radi",
    activity: false,
    soundType: "uzbuna",
  },
  { id: 7, name: "Vrsar", state: "radi", activity: false, soundType: "uzbuna" },
];

const tempListOfRegions = [
  {
    id: 0,
    activity: false,
    tempTownSirens,
  },
  {
    id: 1,
    activity: false,
    tempTownSirens,
  },
];

function App() {
  const [informationValue, setInformationValue] = useState(tempTownSirens);
  const [selectedPanel, setSelectedPanel] = useState(true);
  const [triggerMainAnimationOut, setTriggerMainAnimationOut] = useState("0");
  const [triggerRegionAnimation, setTriggerRegionAnimation] = useState("0");

  //
  const [sirenInfo, setSirenInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/groups")
      .then((response) => response.json())
      .then((data) => {
        setSirenInfo(data);
      });
  }, []);

  //

  const navSelector = async (e) => {
    if (!e) {
      setTriggerMainAnimationOut("1");
    } else {
      setTriggerRegionAnimation("1");
      await delay(100);
      setTriggerMainAnimationOut("2");
      setSelectedPanel(e);
    }
    await delay(100);
    setTriggerRegionAnimation("2");
    setSelectedPanel(e);
  };

  const updateVal = () => {
    const tempArray = [...informationValue];
    tempArray.map((siren) => (siren.activity = !siren.activity));
    setInformationValue(tempArray);
  };

  const printout = () => {
    console.log(...sirenInfo);
  };

  return (
    <div className="App">
      <Navbar getSelect={navSelector}></Navbar>

      <div className="testConatiner">
        <h2>API TEST</h2>
        {sirenInfo.map((siren) => (
          <div key={siren.id}>
            {siren.name} {siren.state} {siren.soundType}
            {siren.activity}
          </div>
        ))}
      </div>

      <button onClick={printout}>PRINT</button>
      {selectedPanel ? (
        <div
          className="Panel"
          onAnimationEnd={() => setTriggerMainAnimationOut(0)}
          mainpanelmovement={triggerMainAnimationOut}
        >
          <SirenControlPanel
            getData={updateVal}
            sirenInfo={sirenInfo}
          ></SirenControlPanel>
        </div>
      ) : (
        <div
          className="Panel2"
          onAnimationEnd={() => setTriggerRegionAnimation(0)}
          regionpanelmovement={triggerRegionAnimation}
        >
          <RegionManagment
            sirenInfo2={informationValue}
            sirenInfo={tempListOfRegions}
          ></RegionManagment>
        </div>
      )}
    </div>
  );
}

export default App;
