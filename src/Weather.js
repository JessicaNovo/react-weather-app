import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `0438fc32e86f8783300a37cf62f26092`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function getWeather(response) {
    setLoad(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [load, setLoad] = useState(false);

  let search = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city..." onChange={getCity} />
      <input type="submit" value="Search" />
    </form>
  );

  let footer = (
    <p className="code">
      <a href="https://github.com/JessicaNovo/react-weather-app" target="/">
        Open-source code
      </a>{" "}
      by Jéssica Novo
    </p>
  );

  if (load) {
    return (
      <div>
        {search}
        <h1>{city}</h1>
        <img src={weather.icon} alt="" />
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} ºC</li>
          <li className="description">Description: {weather.description}</li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
        </ul>
        {footer}
      </div>
    );
  } else {
    return (
      <div>
        {search}
        {footer}
      </div>
    );
  }
}
