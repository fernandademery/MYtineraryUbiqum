import {
  REQUEST_ITINERARIES,
  RECEIVE_ITINERARIES
} from "../actions/itineraryActions";

export default function itinerariesReducer(
  state = {
    isFetching: false,
    itineraries: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_ITINERARIES:
      return { ...state, isFetching: true };
    case RECEIVE_ITINERARIES:
      return { ...state, isFetching: false, itineraries: action.payload };
    default:
      return state;
  }
}
