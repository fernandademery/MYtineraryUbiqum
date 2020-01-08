import fetch from "cross-fetch";

export const REQUEST_ITINERARIES = "REQUEST_ITINERARIES";
function requestItineraries() {
  return {
    type: REQUEST_ITINERARIES
  };
}

export const RECEIVE_ITINERARIES = "RECEIVE_ITINERARIES";
function receiveItineraries(itineraries) {
  return {
    type: RECEIVE_ITINERARIES,
    payload: itineraries
  };
}

export function fetchItineraries(cityname) {
  console.log(cityname);
  return function(dispatch) {
    dispatch(requestItineraries());
    return fetch(`http://localhost:5000/itineraries/${cityname}`)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(result => dispatch(receiveItineraries(result)));
  };
}
