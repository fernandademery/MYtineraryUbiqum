import axios from "axios";
import jwt_decode from "jwt-decode";

export const ADD_USER = "ADD_USER";
export const SET_USERS = "SET_USERS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";
export const USER_LOADING = "USER_LOADING";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const LOG_OUT = "LOG_OUT";

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserError(error) {
  return (dispatch) => {
    dispatch({
      type: ADD_USER_ERROR,
      error,
    });
  };
}

export const userLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export function fetchUsers(email) {
  return (dispatch) => {
    fetch(`/users/${email}`)
      .then((res) => res.json())
      .then((email) => dispatch(setUsers(email)));
  };
}

// Post call to register user.
export const userSignupRequest = (formData) => (dispatch) => {
  axios
    .post("http://localhost:5000/users/", formData)
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
      window.location.href = "/success";
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADD_USER_ERROR,
        payload: err.response.data.message,
      });
    });
};

// Post call for login
export const loginUser = (formData) => {
  console.log(formData);
  return (dispatch) => {
    axios
      .post("http://localhost:5000/users/login", formData)
      .then((res) => {
        console.log(res.data);
        const { token } = res.data;
        if (res.data.success === false) {
          dispatch({
            type: LOGIN_USER_ERROR,
            payload: res.data.message,
          });
        }
        localStorage.setItem("token", token);

        authToken(token);
        const decode = jwt_decode(token);
        console.log(decode);
        dispatch(setUsers(decode));
      })
      .catch((err) => (dispatch) => ({
        type: ADD_USER_ERROR,
        payload: err.response.data.message,
      }));
  };
};

export const authToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer" + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const setUsers = (decode) => {
  return {
    type: SET_USERS,
    payload: decode,
  };
};

// Logout function removing token from local storage.

export const logOut = (user) => {
  return (dispatch) => {
    console.log("user in user action ", user);
    let token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get("http://localhost:5000/users/logout/", config).then((res) => {
      localStorage.removeItem("token");
      authToken();

      dispatch({
        type: LOG_OUT,
      });
      window.location.href = "/";
    });
  };
};
