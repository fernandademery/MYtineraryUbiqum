import {
    GET_FAVOURITES,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE
} from "../actions/favouriteActions";

const initialState = {
    favourites: []
};

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: action.payload
            };
        case GET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload
            };
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: action.payload
            };
        default:
            return state;
    }
}

export default favouriteReducer;