import React from "react";
import Container from "./Container";

const Content = () => {
  return (
    <Container type="content" className="text-center home-start">
      <h2>
        {" "}
        Map app made with{" "}
        <code>
          <span role="img" aria-label="react icon">
            ⚛️
          </span>
          React
        </code>{" "}
        and{" "}
        <code>
          <span role="img" aria-label="leaflet icon">
            🍃
          </span>
          React Leaflet
        </code>
      </h2>
      <p>
        {" "}
        Uses the official live data provided by{" "}
        <a href="https://coronavirus.jhu.edu/">
          Johns Hopkins University Center for Systems Science and Engineering
          (JHU CSSE)
        </a>{" "}
        via{" "}
        <a href="https://github.com/novelcovid/api">
          {" "}
          https://github.com/novelcovid/api
        </a>
      </p>
      <p>
        Source code for this project{" "}
        <a href="https://github.com/kiratot/covid-react-leaflet-map"> here</a>
      </p>
      <code> #StayAtHome and stay safe </code>
    </Container>
  );
};

export default Content;
