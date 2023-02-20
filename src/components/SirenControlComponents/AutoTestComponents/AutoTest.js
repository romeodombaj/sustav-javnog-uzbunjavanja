import React, { useState, useEffect } from "react";
import Button from "../../_UI/Button";
import "./AutoTest.css";

const AutoTest = (props) => {
  const [dueDate, setDueDate] = useState();

  useEffect(() => {
    console.log("hey");
    getFirstSaturday();
  }, []);

  const getFirstSaturday = () => {
    let date = new Date();
    const month = date.getMonth() + 1;
    date.setMonth(month);

    let saturday;

    date.setDate(1);
    while (date.getDay() !== 6) {
      date.setDate(date.getDate() + 1);
    }

    setDueDate(date.toLocaleDateString("hr-HR"));
  };

  const nextAutoTest = new Date("2016-01-04").toLocaleString();

  return (
    <div className="autoTestContainer">
      <h2>TIMER</h2>
      <h2>{dueDate} // 12:00</h2>
      <p>
        *na navedeni datum u navedeno vrijeme <br></br>održavat će se automatsko
        testiranje sirena
      </p>
    </div>
  );
};

export default AutoTest;
