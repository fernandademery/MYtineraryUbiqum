import {
    ADD_USER_ERROR
} from "../actions/signupActions"

const initialState = {
    error: ""
};

export default function (state = initialState, action = {}) {
    console.log(action.payload)
    switch (action.type) {

        case ADD_USER_ERROR:
            return {

                error: action.payload

            }


            default:
                return state;
    }
}