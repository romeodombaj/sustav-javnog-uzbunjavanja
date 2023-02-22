import "./App.css";
import SirenControlPanel from "./components/SirenControlComponents/SirenControlPanel";
import React, { useState, useEffect } from "react";
import Navbar from "./components/SirenControlComponents/Navbar";
import RegionManagment from "./components/SirenControlComponents/RegionComponents/RegionManagment";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// hardcodirani podaci korišteni za testiranje
//frontenda prije izgradnje backenda
const tempTownSirens = [
  { id: 1, name: "Pula", state: "radi", activity: false, sound: "uzbuna" },
  {
    id: 2,
    name: "Rovinj",
    state: "radi",
    activity: false,
    sound: "uzbuna",
  },
  {
    id: 3,
    name: "Umag",
    state: "radi",
    activity: false,
    sound: "uzbuna",
  },
  {
    id: 5,
    name: "Poreč",
    state: "radi",
    activity: false,
    sound: "uzbuna",
  },
  {
    id: 6,
    name: "Pazin",
    state: "radi",
    activity: false,
    sound: "uzbuna",
  },
  { id: 7, name: "Vrsar", state: "radi", activity: false, sound: "uzbuna" },
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
  //useState varijable - refresh aplikacije prilikom promijene
  const [selectedPanel, setSelectedPanel] = useState(true);
  const [triggerMainAnimationOut, setTriggerMainAnimationOut] = useState("0");
  const [triggerRegionAnimation, setTriggerRegionAnimation] = useState("0");
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [sirenInfo, setSirenInfo] = useState([]);

  // useEffect pokrece se pokretanjem aplikacije i svakih 5 sekundi, te na trigger
  // dohvaćamo podatke ("GET")
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, [triggerFetch]);

  const fetchData = () => {
    fetch("http://localhost:8080/api/sirenInfo")
      .then((response) => response.json())
      .then((data) => {
        setSirenInfo(data);
      });
  };

  //navSelector služi za animaciju glavnih prozora prilikom promjene
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

  //trigger kojim možemo ponovo dohvatiti podatke
  const triggerDataRefresh = () => {
    setTimeout(() => {
      setTriggerFetch((prevState) => !prevState);
    }, 100);
  };


  // glavni prikaz komponenti
  return (
    <div className="App">
      <Navbar getSelect={navSelector}></Navbar>
      {selectedPanel ? (
        <div
          className="Panel"
          onAnimationEnd={() => setTriggerMainAnimationOut(0)}
          mainpanelmovement={triggerMainAnimationOut}
        >
          <SirenControlPanel
            triggerDataRefresh={triggerDataRefresh}
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
            sirenInfo2={sirenInfo}
            sirenInfo={tempListOfRegions}
          ></RegionManagment>
        </div>
      )}
    </div>
  );
}

export default App;
