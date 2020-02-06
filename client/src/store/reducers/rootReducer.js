import {
    combineReducers
} from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";
import usersReducer from "./signupReducer";
import errorReducer from "./errorReducer";
import favouriteReducer from "./favouriteReducer";

const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: usersReducer,
    error: errorReducer,
    user: usersReducer,
    authenticated: usersReducer,
    loading: usersReducer,
    favourites: favouriteReducer,


});
export default rootReducer;