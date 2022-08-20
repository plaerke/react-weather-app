import React from "react";

export default function Forecast(props){
return(
    <div className="next-days">
      <h4>{props.day}</h4>
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt=""
        width="70"
      />
      <strong className="high-temp"> 19°</strong>
      <span className="low-temp"> 13°</span>
    </div>)
}