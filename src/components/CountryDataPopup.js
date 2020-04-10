import React from 'react';

const CountryDataPopup = ({display, countryInfo, country, cases, deaths, recovered, updated, onClose, color}) => {


    let updatedFormatted = new Date(updated).toLocaleString()
    return (
        <div>
            <span className="icon-marker-tooltip" style = {display}>
          <p onClick = {() => onClose()}>x</p>
          <img src={countryInfo.flag} alt={`${country}'s flag`} height="42" />
          <h2>{country}</h2>
          <ul>
            <li>
              <strong style = {{color:color }}>Confirmed:</strong> {cases.toLocaleString()}
            </li>
            <li>
              <strong>Deaths:</strong> {deaths.toLocaleString()}
            </li>
            <li>
              <strong style = {{color:"#39B000" }}>Recovered:</strong> {recovered.toLocaleString()}
            </li>
            <li>
              <strong>Last Update:</strong> {updatedFormatted}
            </li>
          </ul>
        </span>
        </div>
    );
}

export default CountryDataPopup;
