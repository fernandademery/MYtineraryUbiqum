import axios from "axios";

export const GET_FAVOURITES = "GET_FAVOURITES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const addFavourite = itinerary => dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  axios
    .post("http://localhost:5000/users/addfavourite", itinerary, config)
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
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  axios
    .post("http://localhost:5000/users/removefavourite", itinerary, config)
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
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  axios.get("http://localhost:5000/users/favourites", config).then(res => {
    dispatch({
      type: GET_FAVOURITES,
      payload: res.data
    });
  });
};