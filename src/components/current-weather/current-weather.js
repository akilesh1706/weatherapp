import React, { useState } from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const celsiusTemperature = Math.round(data.main.temp);
  const fahrenheitTemperature = Math.round((data.main.temp * 9/5) + 32);

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">
          {isCelsius ? `${celsiusTemperature}°C / ${fahrenheitTemperature}°F` : `${fahrenheitTemperature}°F / ${celsiusTemperature}°C`}
        </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label"><b>DETAILS</b></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
