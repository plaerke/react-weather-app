import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather() {
  let weatherData = {
    city: "New York",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    day: "Saturday",
    time: "18:07",
    temperature: 17,
    condition: "Windy",
    windSpeed: 7
  };
  
  return (
    <div className="Weather">
      <div className="body-box">
        <header>
          <div className="row">
            <h1>What's the weather like in...</h1>
          </div>
          <form>
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  placeholder="Enter a city here (e.g. Amsterdam)"
                  autoComplete="off"
                  className="form-control"
                />
              </div>
              <div className="col-1">
                <input type="submit" value="🔍" className="search-button" />
              </div>
              <div className="col-3">
                <button className="search-button current-location-button">
                  Find current location
                </button>
              </div>
            </div>
          </form>
        </header>
        <div className="city-result">
          <h2>{weatherData.city}</h2>
          <div className="row">
            <div className="row">
              <div className="col-3 weather-icon">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.condition}
                  width="110"
                />
              </div>
              <div className="col-9 temp-wind">
                <div className="row">
                  <span className="current-temperature">
                    <span className="temp">{weatherData.temperature}</span>
                    °C
                  </span>
                  </div>
                <div className="condition-and-wind">
                  <div className="row current-condition">
                    <strong> {weatherData.condition} </strong>
                  </div>
                  <div className="row current-wind">
                    Wind Speed: {weatherData.windSpeed} m/s
                  </div>
                </div>
              </div>                
            </div>
          </div>
          <div className="forecast"> 
          <div className="row">
              <Forecast day="Sunday"/>
              <Forecast day="Monday"/>
              <Forecast day="Tuesday"/>
              <Forecast day="Wednesday"/>
              </div>
          </div>
        </div>
        <div className="date-time">
          Last updated on {weatherData.day} at {weatherData.time}
        </div>
      </div>
      </div>
  );
}
