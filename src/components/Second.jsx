import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Nextbtn from "./Nextbtn";
import Backbtn from "./Backbtn";

const Second = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState({
    temperature: "",
    name: "",
    humidity: "",
    speed: "",
    feels: "",
    icon: "",
    descrip: "",
  });

  async function getWeatherData() {
    setLoading(true);
    // console.log(city)

    try {
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
  
      setResult({
        ...result,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        feels: data.main.feels_like,
        icon: data.weather[0].icon,
        descrip: data.weather[0].description,
      });
    }
     catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <div className="copyright">
          <h6>Copyright © 2024 Khosro shariatzadeh</h6>
        </div>
        <div className="cover cover-left"> </div>
        <div className="book">
          <div className="book-page page-right" id="turn-2">
            <div className="page-front">
              <div className="second-page">
                <form>
                  <input
                    type="text"
                    id="city-input"
                    placeholder="Enter City here..."
                    onChange={(e) => setCity(e.target.value)}
                  />
                </form>

                <button
                  onClick={getWeatherData}
                  className="submit"
                  disabled={!city}
                >
                  Get Weather
                </button>

                {loading ? (
                  <div id="weather-data">
                    <div className="icon">
                      <img
                        src={`http://openweathermap.org/img/wn/${result.icon}.png`}
                        alt="Weather Icon"
                      ></img>
                    </div>

                    <div className="temperature">
                      {Math.round(result.temperature)} °C
                    </div>
                    <div className="description">{result.descrip}</div>
                    <div className="error"></div>

                    <div className="details">
                      <div className="details-list">
                        Wind speed: {Math.round(result.speed)} m/s
                      </div>
                      <div className="details-list">
                        Feels like: {Math.round(result.feels)} °C
                      </div>
                      <div className="details-list">
                        Humidity: {result.humidity} %
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <Link to={"/code"}>
                <Nextbtn/>
              </Link>
              <Link to={"/"}>
                <Backbtn/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
