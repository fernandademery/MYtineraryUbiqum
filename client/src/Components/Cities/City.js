import React from "react";
import { Link } from "react-router-dom";

export default function City(props) {
  const { city } = props;
  const style = {
    cityStyle: {
      backgroundColor: "#8C2A3C",
      color: "white"
    }
  };

  return (
    <Link to={`/itinerary/${city.name}`}>
      <div style={style.cityStyle}>
        <h3> {city.name} </h3> <p> {city.country} </p>{" "}
      </div>{" "}
    </Link>
  );
}
