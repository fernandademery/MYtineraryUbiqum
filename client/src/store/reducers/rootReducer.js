import {
    combineReducers
} from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";
import signupReducer from "./signupReducer";
import errorReducer from "./errorReducer";
const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: signupReducer,
    error: errorReducer
});
export default rootReducer;