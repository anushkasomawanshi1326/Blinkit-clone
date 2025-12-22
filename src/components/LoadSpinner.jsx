import React from "react";
import "./LoadSpinner.css";

const LoadSpinner = ({ size = 40, color = "#4f46e5" }) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: `${Math.floor(size / 8)}px solid #f3f3f3`,
    borderTop: `${Math.floor(size / 8)}px solid ${color}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };
  return <div style={spinnerStyle}></div>;
};

export default LoadSpinner;
