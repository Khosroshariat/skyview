import React from "react";

const Backbtn = () => {
  return (
    <div>
      <span className="nextprev-btn back" data-page="turn-2">
        <span className="back-btn">Back</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="back-arrow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default Backbtn;
