import "./NewSiren.css";
import React, { useState } from "react";
import Button from "../../_UI/Button";

//dodavanje nove sirene

const NewSiren = (props) => {
  const [addingIsActive, setAddingIsActive] = useState(false);
  const [sirenInputValue, setSirenInputValue] = useState("");

  // na gumb se otvara forma za dodavanje gumba
  const showAddingPorperties = () => {
    setAddingIsActive((prevState) => !prevState);
  };

  // pritiskom na dodaj dodaje sirenu, patcha sa backendom
  // i triggera refresh dohvaćanja podataka
  const onSubmitAdd = (e) => {
    e.preventDefault();

    console.log(sirenInputValue);

    if (sirenInputValue.length > 0) {
      fetch("http://localhost:8080/api/sirenInfo/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: sirenInputValue,
          state: "radi",
          sound: "0",
          activity: false,
        }),
      });
      setSirenInputValue("");
      showAddingPorperties();

      props.triggerDataRefresh();
    }
  };

  // vraća se ukoliko se klikne odustani
  const onCancelHandler = () => {
    setSirenInputValue("");
    showAddingPorperties();
  };

  const onChangeInputHandler = (e) => {
    setSirenInputValue(e.target.value);
  };

  return (
    <div>
      {!addingIsActive ? (
        <button onClick={showAddingPorperties} className="newSirenAddButton">
          +
        </button>
      ) : (
        <form className="addingForm" onSubmit={onSubmitAdd}>
          <label className="addSirenLabel">UPIŠI IME SIRENE</label>
          <input
            value={sirenInputValue}
            className="addSirenInput"
            onChange={onChangeInputHandler}
          ></input>
          <Button type="submit" text="DODAJ"></Button>
          <Button text="ODUSTANI" onClick={onCancelHandler}></Button>
        </form>
      )}
    </div>
  );
};

export default NewSiren;
