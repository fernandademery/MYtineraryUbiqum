import { SET_USERS, ADD_USER, USER_LOADING } from "../actions/signupActions";

const isEmpty = require("is-empty");

const initialState = {
  authenticated: false,
  user: {},
  loading: false
};

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, loading: true };
    case SET_USERS:
      console.log(state.authenticated);
      return {
        ...state,
        authenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case ADD_USER:
      return (state = [
        ...state,
        {
          message: action.payload.error
        }
      ]);

    default:
      return state;
  }
};

export default usersReducer;
