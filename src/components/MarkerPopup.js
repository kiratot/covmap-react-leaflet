import React from 'react';

const MarkerPopup = ({
    country,
    updated,
    cases,
    deaths,
    recovered,
    countryInfo,
    handleClose,
    display,
    color
  }) => {

    let casesString = `${cases}`;
    if (cases > 1000) casesString = `${casesString.slice(0, -3)}k+`;

    return (
      <span className="icon-marker" style={{ backgroundColor: color }}>
        {casesString}
      </span>
    );
  };
  
  export default MarkerPopup;
  