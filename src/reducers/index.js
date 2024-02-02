import { combineReducers } from "redux";
import clientsReducer from "../clients/reducers/clientsSlice.js";
import productsReducer from "../products/reducers/productsSlice.js";
import sellersReducer from "../sellers/reducers/sellersSlice.js";
import locationsReducer from "./locationSlice.js";

export default combineReducers({
  clientsReducer,
  productsReducer,
  sellersReducer,
  locationsReducer,
});
