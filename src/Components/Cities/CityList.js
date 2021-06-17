import React from "react";
import City from "./City.js";

export default function CityList(props) {
  console.log(props);
  const { cities } = props;

  return (
    <div>
      {" "}
      {cities &&
        cities.map(city => {
          return <City key={city.name} city={city} />;
        })}{" "}
    </div>
  );
}
