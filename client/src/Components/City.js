import React from "react";

export default function City(props) {
  const { city } = props;
  const style = {
    cityStyle: {
      backgroundColor: "#8C2A3C",
      color: "white"
    }
  };

  return (
    <div style={style.cityStyle}>
      <h3> {city.name} </h3> <p> {city.country} </p>{" "}
    </div>
  );
}
