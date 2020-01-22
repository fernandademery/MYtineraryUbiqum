import axios from "axios";

export const SET_USERS = "SET_USERS";
export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

export const ADD_USER = "ADD_USER";
export function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}

export const ADD_USER_ERROR = "ADD_USER_ERROR";
export function addUserError(error) {
  return {
    type: ADD_USER_ERROR,
    error
  };
}

export function fetchUsers(email) {
  return dispatch => {
    // eslint-disable-next-line quotes
    fetch(`/users/${email}`)
      .then(res => res.json())
      .then(email => dispatch(setUsers(email)));
  };
}

export const userSignupRequest = formData => dispatch => {
  axios
    .post("http://localhost:5000/users/", formData)
    .then(res => {
      console.log(res);
      console.log(res.data);
      dispatch({
        type: ADD_USER,
        payload: res.data
      });
    })
    .catch(err => {
      alert(err.response.data.message);
      dispatch({
        type: ADD_USER_ERROR,
        error: err.response.data.message
      });
    });
};
