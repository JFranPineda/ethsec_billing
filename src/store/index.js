import { configureStore } from "@reduxjs/toolkit";
import { syncClientWithDatabaseMiddleware } from "../clients/hooks/clientsMiddleware.js";
import { syncMoneyCatalogWithDatabaseMiddleware } from "../money_catalog/hooks/moneyCatalogMiddleware.js";
import { syncProductWithDatabaseMiddleware } from "../products/hooks/productsMiddleware.js";
import rootReducer from "../reducers/index.js";
import { syncSellerWithDatabaseMiddleware } from "../sellers/hooks/sellersMiddleware.js";
import { persistanceLocalStorageMiddleware } from "./customMiddleware.js";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  persistanceLocalStorageMiddleware,
  syncProductWithDatabaseMiddleware,
  syncClientWithDatabaseMiddleware,
  syncSellerWithDatabaseMiddleware,
  syncMoneyCatalogWithDatabaseMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
