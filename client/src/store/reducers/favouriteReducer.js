import GET_FAVOURITES from "../actions/favouriteActions";

const initialState = {
    favourites: []
};

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload
            };
        default:
            return state;
    }
}