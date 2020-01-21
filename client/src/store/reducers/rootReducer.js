import {
    combineReducers
} from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";
import signupReducer from "./signupReducer";
const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: signupReducer
});
export default rootReducer;