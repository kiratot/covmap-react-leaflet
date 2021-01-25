import React from "react";

const MarkerPopup = ({ color, cases }) => {
  let casesString = `${cases}`;
  if (cases > 1000) casesString = `${casesString.slice(0, -3)}k+`;
  if (cases > 1000000) casesString = `${casesString.slice(0, -5)}M+`;

  return (
    <span className="icon-marker" style={{ backgroundColor: color }}>
      {casesString}
    </span>
  );
};

export default MarkerPopup;
