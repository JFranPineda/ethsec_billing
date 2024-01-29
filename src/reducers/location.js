import { CHANGE_COUNT, CHANGE_LOCATION } from "../actions/locationType.js";

const initialState = {
  count: 0,
  location: "Seattle, WA",
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case CHANGE_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
