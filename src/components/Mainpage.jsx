import React from "react";
import { Link } from "react-router-dom";
import image from "../images/download.png";
import Navbar from "./Navbar";
import Skillsvg from "./Skillsvg";
import Nextbtn from "./Nextbtn";

export const Mainpage = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <div className="copyright">
          <h6>Copyright © 2024 Khosro shariatzadeh</h6>
        </div>

        <div className="cover cover-left"></div>

        <div className="book">
          <div className="book-page page-right">
            <div className="page-front">
              <div className="main-page">
                <div className="page1-items">
                  <h1 className="title">Coding project :</h1>
                  <p className="main-para">
                    <span className="color">SkyView</span> is a web application
                    built using the skills below that provides users with
                    real-time weather information for any location worldwide.
                    The app fetches weather data from a reliable API and
                    presents it in a user-friendly interface, making it easy for
                    users to access and understand weather forecasts. In this
                    app, on the next page, you can enter a city name and get the
                    weather. And on the last page, you can find the details of
                    the code.
                  </p>

                  <div className="new-items">
                    <div>
                      <h5>
                        <Skillsvg />
                        HTML
                      </h5>
                      <h5>
                        <Skillsvg />
                        CSS Layout
                      </h5>
                      <h5>
                        <Skillsvg />
                        CSS Animation
                      </h5>
                      <h5>
                        <Skillsvg />
                        Javascript Functions
                      </h5>
                      <h5>
                        <Skillsvg />
                        React Hooks
                      </h5>
                      <h5>
                        <Skillsvg />
                        React Router
                      </h5>
                    </div>

                    <div>
                      <img className="img-inside" src={image} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/app">
                <Nextbtn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
