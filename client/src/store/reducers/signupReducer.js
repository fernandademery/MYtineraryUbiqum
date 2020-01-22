import { SET_USERS, ADD_USER } from "../actions/signupActions";

const usersReducer = (state = [], action = {}) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case ADD_USER:
      console.log("reducer");
      return (state = [...state, { message: action.payload.error }]);

    default:
      return state;
  }
};

export default usersReducer;