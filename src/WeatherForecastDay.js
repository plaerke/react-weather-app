import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = props.data.temp.max;
    return Math.round(temperature);
  }

  function minTemperature() {
    let temperature = props.data.temp.min;
    return Math.round(temperature);
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <h4>{day()}</h4>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div>
        <strong className="high-temp"> {maxTemperature()}°</strong>
        <span className="low-temp"> {minTemperature()}°</span>
      </div>
    </div>
  );
}
