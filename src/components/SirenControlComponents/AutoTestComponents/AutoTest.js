import React, { useState, useEffect } from "react";
import "./AutoTest.css";

const AutoTest = (props) => {
  const [dueDate, setDueDate] = useState(new Date());

  const activateTest = () => {
    props.activate();
    setTimeout(() => {
      props.deactivate();
    }, 10000);
  };

  useEffect(() => {
    getFirstSaturday(0);
    const interval = setInterval(() => {
      const dt = new Date();
      if (
        dt.getMonth() === dueDate.getMonth() &&
        dt.getDate() === dueDate.getDate() &&
        dt.getHours() === 12 &&
        dt.getMinutes() === 0
      ) {
        activateTest();
        getFirstSaturday(0);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  //dobivanje prve subote
  const getFirstSaturday = (mnt) => {
    const date = new Date();
    const currentDate = new Date();

    const month = date.getMonth() + mnt;
    date.setMonth(month);

    date.setDate(1);
    while (date.getDay() !== 6) {
      date.setDate(date.getDate() + 1);
    }

    if (
      currentDate.getDate() > date.getDate() &&
      currentDate.getMonth() === date.getMonth()
    ) {
      getFirstSaturday(1);
    } else {
      setDueDate(date);
    }
  };

  return (
    <div className="autoTestContainer">
      <h2>SLJEDEĆE TESTIRANJE :</h2>
      <div className="autoTestTimeContainer">
        <h2 className="autoTestTime">{dueDate.toLocaleDateString("hr-HR")}</h2>
        <h2 className="autoTestTime">12:00</h2>
      </div>
    </div>
  );
};

export default AutoTest;
