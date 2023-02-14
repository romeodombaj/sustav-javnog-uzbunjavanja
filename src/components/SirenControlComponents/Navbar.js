import "./Navbar.css";
import React, { useState } from "react";

const Navbar = (props) => {
  const [selectionStyleClass, setSelectionStyleClass] = useState(
    "selectorV selectorPOS1"
  );

  const changeSelection = () => {
    setSelectionStyleClass("selectorV selectorPOS1");
    props.getSelect(true);
  };

  const changeSelection2 = () => {
    setSelectionStyleClass("selectorV selectorPOS2");
    props.getSelect(false);
  };

  return (
    <div>
      <div className="navbarContainer">
        <button onClick={changeSelection} type="button" className="navbarItem">
          MAIN
        </button>
        <button onClick={changeSelection2} type="button" className="navbarItem">
          REGIJE
        </button>
        <div className={selectionStyleClass}></div>
      </div>
    </div>
  );
};

export default Navbar;
