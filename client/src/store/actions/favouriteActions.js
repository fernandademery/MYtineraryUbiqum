import axios from "axios";

export const GET_FAVOURITES = "GET_FAVOURITES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const addFavourite = favourite => dispatch => {
  axios
    .post(`http://localhost:5000/users/addfavourite`, favourite)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_FAVOURITE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const removeFavourite = itinerary => dispatch => {
  axios
    .post("http://localhost:5000/users/removefavourite", itinerary)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: REMOVE_FAVOURITE,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getFavItin = () => dispatch => {
  axios.get("http://localhost:5000/users/favourites").then(res => {
    dispatch({
      type: GET_FAVOURITES,
      payload: res.data
    });
  });
};
