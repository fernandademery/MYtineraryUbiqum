import React from "react";

export default function City(props) {
  const { city } = props;

  return (
    <div>
      <h3> {city.name} </h3> <p> {city.country} </p>{" "}
    </div>
  );
}
