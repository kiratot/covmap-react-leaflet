import React, { useEffect, useState,  } from "react";
import L from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {
  Map,
  Marker,
  TileLayer
} from "react-leaflet";
import { divIcon } from "leaflet";
import "./App.css";
import MarkerPopup from "./components/MarkerPopup";
import CountryDataPopup from "./components/CountryDataPopup";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content  from"./components/Content"
function App() {

  const [Markers, setMarkers] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
 
  
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((response) => response.json())
      .then((data) => {
        const hasData = Array.isArray(data) && data.length > 0;
        if (!hasData) return;
        setMarkers(data);
        //console.log(data);
      });
  }, []);
  const handleColor = (cases) =>{
    let color  = "#FEB24C";
    if (cases > 1000) color = "#FC4E2A";
    if (cases > 10000) color = "#BD0026";
    if (cases > 100000) color = "#34000B";
    return color;
  }
  const accessToken =
    "pk.eyJ1Ijoia2lyYXRvdCIsImEiOiJjazhsdzkydHAwN3hvM2xvY2hsZ2dqeXBhIn0.qzub7QxB_AGoa2yf3HvVmg";

  const handleClose = () => {
    setActiveMarker(null);
  };
  const handleClick = (country) => {
    setActiveMarker(country);
  };

    const southWest = L.latLng(-89.98155760646617, -180),
    northEast = L.latLng(89.99346179538875, 185);
    const bounds = L.latLngBounds(southWest, northEast);

  return (
    <>
    <Header/>
      <Map
        center={[0, 0]}
        zoom={2}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={false}
        touchZoom = {true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        maxBounds = {bounds}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`}
          attribution='Map data &copy; Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        {Markers.map((country, i) => (
          <Marker
          riseOnHover = {true}
          bubblingMouseEvents = {true}
            key={i}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={divIcon({
              className: "icon-marker",
              html: ReactDOMServer.renderToString( 
              <MarkerPopup
              cases = {country.cases}
              color = {handleColor(country.cases)}/>
              ),
            })}
            onClick={() => handleClick(country)}
          />
        ))}
        {activeMarker && (
          <CountryDataPopup
            country={activeMarker.country}
            updated={activeMarker.updated}
            cases={activeMarker.cases}
            deaths={activeMarker.deaths}
            recovered={activeMarker.recovered}
            countryInfo={activeMarker.countryInfo}
            color = {handleColor(activeMarker.cases)}
            onClose = {handleClose}
          />
        )} 
      </Map>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
