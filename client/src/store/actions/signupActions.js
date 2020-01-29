import axios from "axios";
import jwt_decode from "jwt-decode";


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
    fetch(`/users/${email}`)
      .then(res => res.json())
      .then(email => dispatch(setUsers(email)));
  };
}

// Post call to register user.
export const userSignupRequest = formData => dispatch => {
  axios
    .post("http://localhost:5000/users/", formData)
    .then(res => {
      dispatch({
        type: ADD_USER,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: ADD_USER_ERROR,
        payload: err.response.data.message
      });
    });
};

export const USER_LOADING = "USER_LOADING";
export const userLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const loginUser = formData => {
  console.log(formData);
  return dispatch => {
    axios.post("http://localhost:5000/users/login", formData).then(res => {
        console.log(res.data);
        const {
          token
        } = res.data;
        console.log(token);
        localStorage.setItem("token", token);


        authToken(token);
        const decode = jwt_decode(token);
        console.log(decode);
        dispatch(setUsers(decode));
      })
      .catch(err => dispatch => ({
        type: ADD_USER_ERROR,
        payload: err.response.data.message
      }));
  };
};

export const authToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer" + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const SET_USERS = "SET_USERS";
export const setUsers = decode => {
  return {
    type: SET_USERS,
    payload: decode
  };
};

export const logOut = () => dispatch => {

  axios.get("api/users/logout").then(res => {
    localStorage.removeItem("token");

    //set authorization to false
    authToken(false);

    //send empty current user
    dispatch(setUsers({}));
  });
};