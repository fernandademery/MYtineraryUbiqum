import {
    ADD_USER_ERROR
} from "../actions/signupActions"

const initialState = {
    error: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER_ERROR:
            return (state = [...state, {
                error: action.error
            }]);

        default:
            return state;
    }
}