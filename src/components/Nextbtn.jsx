import React from "react";

const Nextbtn = () => {
  return (
    <div>
      <span className="nextprev-btn" data-page="turn-3">
        <span className="text-btn">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="next-arrow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default Nextbtn;
