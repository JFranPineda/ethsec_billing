import { combineReducers } from "redux";
import clientsReducer from "../clients/reducers/clientsSlice.js";
import productsReducer from "../products/reducers/productsSlice.js";
import locationsReducer from "./locationSlice.js";

export default combineReducers({
  locationsReducer,
  productsReducer,
  clientsReducer,
});
