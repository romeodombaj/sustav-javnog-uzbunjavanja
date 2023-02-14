import React, { useState } from "react";
import Button from "../../_UI/Button";
import "./AutoTest.css";

const AutoTest = (props) => {
  const onActivateAllHandler = () => {
    props.getData();
  };

  const nextAutoTest = new Date("2016-01-04").toLocaleString();

  return (
    <div className="autoTestContainer">
      <h2>TIMER</h2>
      <h2>{nextAutoTest}</h2>
      <Button
        text="Click to Activate all"
        onClick={onActivateAllHandler}
      ></Button>
    </div>
  );
};

export default AutoTest;
