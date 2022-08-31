import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a
            href="/"
            className="fahrenheit-temperature"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" className="fahrenheit-temperature" onClick={showCelcius}>
            °C
          </a>
        </span>
      </span>
    );
  }
}
