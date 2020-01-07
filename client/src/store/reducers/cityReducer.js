import { RECEIVE_CITIES, REQUEST_CITIES } from "../actions/cityActions";

export default function citiesReducer(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CITIES:
      return { ...state, isFetching: true };
    case RECEIVE_CITIES:
      return { ...state, isFetching: false, items: action.city };
    default:
      return state;
  }
}
