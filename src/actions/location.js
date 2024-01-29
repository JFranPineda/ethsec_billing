import { CHANGE_COUNT, CHANGE_LOCATION } from "./locationType.js";

export const changeLocation = (location) => {
  return {
    type: CHANGE_LOCATION,
    payload: location,
  };
};

export const changeCount = (amount) => {
  return {
    type: CHANGE_COUNT,
    payload: amount,
  };
};
