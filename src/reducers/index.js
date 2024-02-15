import { combineReducers } from "redux";
import billingsReducer from "../billings/reducers/billingsSlice.js";
import clientsReducer from "../clients/reducers/clientsSlice.js";
import moniesReducer from "../money_catalog/reducers/moneyCatalogSlice.js";
import productsReducer from "../products/reducers/productsSlice.js";
import sellersReducer from "../sellers/reducers/sellersSlice.js";

export default combineReducers({
  billingsReducer,
  clientsReducer,
  productsReducer,
  sellersReducer,
  moniesReducer,
});
