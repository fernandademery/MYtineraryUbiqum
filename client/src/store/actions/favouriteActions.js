import axios from "axios";

export const GET_FAVOURITES = "GET_FAVOURITES";
export const addFavourite = (favourite, user, cityname) => dispatch => {
  console.log("user", user, "favourite", favourite);
  axios
    .post(`http://localhost:5000/itinerary/Barcelona/favourites/`, {
      favourite: favourite,
      user: user
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_FAVOURITES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const removeFavourite = (id, user) => dispatch => {
  axios
    .post("http://localhost:5000/itineraries/deletefavourite", {
      id: id,
      user: user
    })
    .then(res => {
      console.log("itineraries after deleting", res.data);
      dispatch({
        type: GET_FAVOURITES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};
