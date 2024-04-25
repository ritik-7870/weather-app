import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../../Assets/search.png";
import clear_icon from "../../Assets/clear.png";
import cloud_icon from "../../Assets/cloud.png";
import drizzle_icon from "../../Assets/drizzle.png";
import rain_icon from "../../Assets/rain.png";
import snow_icon from "../../Assets/snow.png";
import wind_icon from "../../Assets/wind.png";
import humidity_icon from "../../Assets/humidity.png";
import { getWeatherData } from "../../Service/WeatherApi";
const WeatherApp = () => {
  const [cityName, setCityName] = useState("");

  const [weatherData, setWeatherData] = useState({})


  const handleSearch = () => {
    if (cityName === "") {
      return;
    }

    getWeatherData(cityName).then((response) => {
      console.log(response.data);
      setWeatherData(response.data)
    });
  };

  return (
    <div className="container">
      <div className="search_bar">
        <input
          type="text"
          onChange={(e) => setCityName(e.target.value)}
          className="search-input-field"
          placeholder="search"
        />
        <div className="search-lens" onClick={() => handleSearch()}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
     
            
           
      <div className="weather-temp">{weatherData?.main?.temp}</div>
      <div className="weather-location">{weatherData.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{weatherData.main?.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{weatherData.wind?.speed} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default WeatherApp;
