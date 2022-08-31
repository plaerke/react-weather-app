import React from "react";
import FormattedDate from "./FormattedDate.js";
import Forecast from "./Forecast.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-result">
        <h2>{props.data.city}</h2>
        <div className="row">
          <div className="row">
            <div className="col-3 weather-icon">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                width="110"
              />
            </div>
            <div className="col-9 temp-wind">
              <div className="row">
                <span className="current-temperature">
                  <WeatherTemperature celcius={props.data.temperature} />
                </span>
              </div>
              <div className="condition-and-wind">
                <div className="row current-condition text-capitalize">
                  <strong> {props.data.description} </strong>
                </div>
                <div className="row current-wind">
                  Wind Speed: {props.data.windSpeed} m/s
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="forecast">
          <div className="row">
            <Forecast day="Sun" />
            <Forecast day="Mon" />
            <Forecast day="Tue" />
            <Forecast day="Wed" />
          </div>
        </div>
      </div>
      <div className="date-time">
        <FormattedDate date={props.data.date} />
      </div>
    </div>
  );
}
