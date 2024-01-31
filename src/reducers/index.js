import { combineReducers } from "redux";
import productsReducer from "../products/reducers/productsSlice.js";
import locationsReducer from "./locationSlice.js";

export default combineReducers({
  locationsReducer,
  productsReducer,
});
