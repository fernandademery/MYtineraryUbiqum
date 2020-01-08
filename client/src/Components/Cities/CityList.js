import React from "react";
import City from "./City.js";

export default function CityList(props) {
  console.log(props);
  const { cities } = props;

  return (
    <div>
      {cities.map((city, _id) => {
        return <City key={_id} city={city} />;
      })}
    </div>
  );
}
