import React from "react";
import Svgs from "./Svgs";

const Navbar = () => {
  function openMenu() {
    document.body.classList += " menu-open";
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
  }
  return (
    <div>
      <div className="nav">
        <div className="nav-text">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="nav-img"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            <span className="nav-logo">SkyView</span>
          </a>
        </div>
        <div className="list-main">
          <a
            href="https://github.com/Khosroshariat/skyview"
            target="_blank"
            rel="noreferrer"
          >
            <Svgs />
            Git Repo
          </a>
          <a href="https://www.khosro.ca/" target="_blank" rel="noreferrer">
            <Svgs />
            Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/khosro-sh/"
            target="_blank"
            rel="noreferrer"
          >
            <Svgs />
            Linkedin
          </a>
        </div>

        <button onClick={openMenu} className="btn-open">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="menubar">
        <span onClick={closeMenu} className="btn-close">
          X
        </span>
        <a
          className="link"
          href="https://github.com/Khosroshariat/skyview"
          target="_blank"
          rel="noreferrer"
        >
          <Svgs />
          Git Repo
        </a>
        <a className="link" href="https://www.khosro.ca/" target="_blank" rel="noreferrer">
          <Svgs />
          Portfolio
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/khosro-sh/"
          target="_blank"
          rel="noreferrer"
        >
          <Svgs />
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Navbar;
