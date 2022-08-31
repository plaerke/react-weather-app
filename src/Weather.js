import React, { useState } from "react";
import "./Weather.css";
import Forecast from "./Forecast";
import axios from "axios";
import { BallTriangle } from 'react-loader-spinner';
import FormattedDate from "./FormattedDate.js";


export default function Weather() {
    let [weatherData, setWeatherData] = useState({ready: false});
    
    function handleSubmit(response){
    setWeatherData({
    ready: true,
    imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    windSpeed: response.data.wind.speed,
    date: new Date(response.data.dt * 1000),
  })
};

  if (weatherData.ready) {
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
                  alt={weatherData.description}
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
                  <div className="row current-condition text-capitalize">
                    <strong> {weatherData.description} </strong>
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
              <Forecast day="Sun"/>
              <Forecast day="Mon"/>
              <Forecast day="Tue"/>
              <Forecast day="Wed"/>
              </div>
          </div>
        </div>
        <div className="date-time">
          <FormattedDate date={weatherData.date} />
        </div>
      </div>
      </div>
  );}
  else {
    let city = "New York"
    let apiKey = "05a453d2c06a99051e321b8b98d3ef67";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return (<BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
  className="loader"
/>)
  }
}
