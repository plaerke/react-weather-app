import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="col forecast-boxes">
        <div className="next-days">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <span key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </span>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiKey = "05a453d2c06a99051e321b8b98d3ef67";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
