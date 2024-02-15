import { configureStore } from "@reduxjs/toolkit";
import { syncBillingWithDatabaseMiddleware } from "../billings/hooks/billingsMiddleware.js";
import { syncClientWithDatabaseMiddleware } from "../clients/hooks/clientsMiddleware.js";
import { syncMoneyCatalogWithDatabaseMiddleware } from "../money_catalog/hooks/moneyCatalogMiddleware.js";
import { syncProductWithDatabaseMiddleware } from "../products/hooks/productsMiddleware.js";
import rootReducer from "../reducers/index.js";
import { syncSellerWithDatabaseMiddleware } from "../sellers/hooks/sellersMiddleware.js";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  syncProductWithDatabaseMiddleware,
  syncClientWithDatabaseMiddleware,
  syncSellerWithDatabaseMiddleware,
  syncBillingWithDatabaseMiddleware,
  syncMoneyCatalogWithDatabaseMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
