import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Forecast.css";

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

  function load() {
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiKey = "de0b127bd761738a8f5db7577883838e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="col forecast-boxes">
          <div className="next-days">
            {forecastData.map(function (dailyForecast, index) {
              if (index < 4) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
