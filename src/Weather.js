import React from "react";
import axios from "axios";

export default function Weather(props) {
  function getWeather(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp} ºC`);
  }
  let apiKey = `0438fc32e86f8783300a37cf62f26092`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getWeather);

  return (
    <div>
      <h2>The temperature in Porto is 16ºC.</h2>
    </div>
  );
}
