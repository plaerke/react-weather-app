import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <Row className="row">
            <h1>What's the weather like in...</h1>
          </Row>
          <form>
            <Row className="row">
              <Col xs={7}>
                <input
                  type="search"
                  placeholder="Enter a city here (e.g. Amsterdam)"
                  autoComplete="off"
                  className="form-control"
                />
              </Col>
              <Col xs={1}>
                <input type="submit" value="🔍" className="search-button" />
              </Col>
              <Col xs={3}>
                <button className="search-button current-location-button">
                  Find current location
                </button>
              </Col>
            </Row>
          </form>
        </header>
        <div className="city-result">
          <h2>{weatherData.city}</h2>
          <Row className="row">
            <Row className="row">
              <Col xs={3} className="weather-icon">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.condition}
                  width="110"
                />
              </Col>
              <Col xs={9} className="temp-wind">
                <Row className="row">
                  <span className="current-temperature">
                    <span className="temp">{weatherData.temperature}</span>
                    °C
                  </span>
                  </Row>
              </Col>                
                <div className="condition-and-wind">
                  <Row className="row current-condition">
                    <strong> {weatherData.condition} </strong>
                  </Row>
                  <Row className="row current-wind">
                    Wind Speed: {weatherData.windSpeed} m/s
                  </Row>
                </div>
            </Row>
          </Row>
          <Row className="forecast"> 
              <Forecast day="Sunday"/>
              <Forecast day="Monday"/>
              <Forecast day="Tuesday"/>
              <Forecast day="Wednesday"/>
          </Row>
        </div>
        <div className="date-time">
          Last updated on {weatherData.day} at {weatherData.time}
        </div>
      </div>
    </div>
  );
}
