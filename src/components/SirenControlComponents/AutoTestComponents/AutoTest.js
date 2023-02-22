import React, { useState, useEffect } from "react";
import "./AutoTest.css";

// aktivacija automatskog testiranja svake prve subote u mjesecu

const AutoTest = (props) => {
  const [dueDate, setDueDate] = useState(new Date());

  // ukoliko je došlo do prve subote aktivira sirenu na 1 minutu
  const activateTest = () => {
    props.activate();
    setTimeout(() => {
      props.deactivate();
    }, 60000);
  };

  // provjerava svakih 30s da li je trenutno vrijeme kad se mora aktivirati
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
  //provjerava da li je prosla prva subota ovaj mjesec, ako nije poziva se za sljedeći mjesec
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

  // ispis datuma i vremena sljedećeg testiranja
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
