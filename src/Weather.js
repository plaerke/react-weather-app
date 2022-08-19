import React from "react";
import axios from "axios";

export default function Weather(){
    function showTemperature(response){
        alert(`It is currently ${Math.round(response.data.main.temp)} degrees Celcius in New York`)
    }
    
    let urlKey = `05a453d2c06a99051e321b8b98d3ef67`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${urlKey}&units=metric`;
    axios.get(url).then(showTemperature);
}