import React, { useState, useEffect } from "react";
import ClockTable from "./components/ClockTable";

function App() {

  const [ clock, setClock ] = useState();
  const [ day, setDay ] = useState();

  

  const dateBuilder = () => {
    let d = new Date();
    let months = [
      "January",
      "Feruary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    setDay(`${day} ${date} ${month} ${year}`) ;
  } 

  const getTime = () => {
    const date = new Date();
      setClock(date.toLocaleTimeString());
  }

  useEffect(() => {
    setInterval(() => {
      getTime()
      dateBuilder()
      }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <ClockTable clock={clock} day={day} />
      </div>
    </div>
  );
}

export default App;
