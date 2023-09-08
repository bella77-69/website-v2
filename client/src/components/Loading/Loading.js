import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <svg
          width="300px"
          height="300px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          className="uil-ripple"
        >
          <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
          {[0, 2].map((delay) => (
            <g key={delay}>
              <animate
                attributeName="opacity"
                dur="4s"
                repeatCount="indefinite"
                begin={`${delay}s`}
                keyTimes="0;0.25;0.5;0.75;1"
                values="1;0.6;0.3;0.6;1"
              ></animate>
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#525357"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <animate
                  attributeName="r"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                  keyTimes="0;0.25;0.5;0.75;1"
                  values="0;25;45;25;0"
                ></animate>
              </circle>
              <circle
                cx="50"
                cy="50"
                r="20"
                stroke="#636468"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <animate
                  attributeName="r"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                  keyTimes="0;0.25;0.5;0.75;1"
                  values="0;15;30;15;0"
                ></animate>
              </circle>
            </g>
          ))}
        </svg>
        <div className="loading-message">Loading ....</div>
      </div>
    </div>
  );
}