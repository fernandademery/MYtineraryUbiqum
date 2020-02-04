import {
    combineReducers
} from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";
import usersReducer from "./signupReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: usersReducer,
    error: errorReducer,
    user: usersReducer,
    authenticated: usersReducer,
    loading: usersReducer,
    errorLogin: errorReducer
});
export default rootReducer;