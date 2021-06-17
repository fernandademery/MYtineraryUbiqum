import {
  ADD_USER_ERROR,
  LOGIN_USER_ERROR
} from "../actions/signupActions";

const initialState = {
  error: ""
};

export default function (state = initialState, action = {}) {
  console.log(action);
  switch (action.type) {
    case ADD_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}