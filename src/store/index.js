import { configureStore } from "@reduxjs/toolkit";
import { syncClientDeleteWithDatabaseMiddleware } from "../clients/hooks/clientsMiddleware.js";
import { syncProductDeleteWithDatabaseMiddleware } from "../products/hooks/productsMiddleware.js";
import rootReducer from "../reducers/index.js";
import { persistanceLocalStorageMiddleware } from "./customMiddleware.js";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  persistanceLocalStorageMiddleware,
  syncProductDeleteWithDatabaseMiddleware,
  syncClientDeleteWithDatabaseMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
