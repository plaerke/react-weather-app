import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let Temperature = props.data.temp.max;
    return Math.round(maxTemperature);
  }

  function minTemperature() {
    let Temperature = props.data.temp.min;
    return Math.round(minTemperature);
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <h4>{props.data.dt}</h4>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div>
        <strong className="high-temp"> {maxTemperature()}°</strong>
        <span className="low-temp"> {minTemperature()}°</span>
      </div>
    </div>
  );
}
