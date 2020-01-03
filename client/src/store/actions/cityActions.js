export const REQUEST_CITIES = "REQUEST_CITIES";

function requestCities(cities) {
  return {
    type: REQUEST_CITIES,
    cities
  };
}

export const RECEIVE_CITIES = "RECEIVE_CITIES";

function receiveCities(cities, json) {
  return {
    type: RECEIVE_CITIES,
    cities,
    city: json.data.children.map(child => child.data)
  };
}
