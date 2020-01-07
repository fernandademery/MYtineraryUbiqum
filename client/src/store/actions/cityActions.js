import fetch from "cross-fetch";

export const REQUEST_CITIES = "REQUEST_CITIES";

function requestCities(cities) {
  return {
    type: REQUEST_CITIES
  };
}

export const RECEIVE_CITIES = "RECEIVE_CITIES";

function receiveCities(cities, json) {
  return {
    type: RECEIVE_CITIES,
    cities,
    city: json.map(child => child)
  };
}

export function fetchCities(cities) {
  return function(dispatch) {
    dispatch(requestCities(cities));
    return fetch("http://localhost:5000/cities/all")
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveCities(cities, json)));
  };
}
