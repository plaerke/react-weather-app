import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { BallTriangle } from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
    setWeatherData({
    ready: true,
    icon: response.data.weather[0].icon,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    windSpeed: Math.round(response.data.wind.speed),
    date: new Date(response.data.dt * 1000),
    city: city,
  })
};

function search(){
 let apiKey = "05a453d2c06a99051e321b8b98d3ef67";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  search(city);
}

function handleCityChange(event){
setCity(event.target.value);
}

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <div className="body-box">
          <div className="row">
            <h1>What's the weather like in...</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  placeholder="Enter a city here (e.g. Amsterdam)"
                  autoComplete="off"
                  className="form-control"
                  onChange={handleCityChange}
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
        <WeatherInfo data={weatherData}/>
      </div>
      </div>
  );}
  else {
    search();
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
