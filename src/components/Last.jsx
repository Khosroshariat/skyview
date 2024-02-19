import React from "react";
import { Link } from "react-router-dom";
import Backbtn from "./Backbtn";
import Navbar from "./Navbar";

const Last = () => {
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
              <div className="last-page">
                <h1 className="title">The code :</h1>
                <p className="main-para">
                  In this app, I use{" "}
                  <span className="color">the OpenWeatherMap API</span> to fetch
                  weather data based on the user's input. I utilize{" "}
                  <span className="color">useState</span> to manage the state of
                  the input field and the weather data, and{" "}
                  <span className="color">async functions</span> along with the
                  fetch API to make asynchronous requests to the OpenWeatherMap
                  API. <br />
                  <span className="color">1.</span> I define two state
                  variables: city to store the user's input for the city name,
                  and data to store the retrieved weather data. <br />{" "}
                  <span className="color">2.</span> I create a form with an
                  input field for the user to enter the city name and a submit
                  button. <br /> <span className="color">3.</span> When the
                  button is clicked, the getWeatherData function is called. This
                  function makes a fetch request to the API using the entered
                  city name. <br /> <span className="color">4.</span> Upon
                  receiving the response, I parse the JSON data and set it to
                  the data state. <br /> <span className="color">5.</span>{" "}
                  Finally, I conditionally render the weather data and
                  displaying the weather icon, temperature, weather description,
                  wind speed, feels like and humidity.
                </p>
              </div>

              <Link to="/app">
                <Backbtn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
