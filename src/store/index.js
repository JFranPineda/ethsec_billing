import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index.js";
import {
  persistanceLocalStorageMiddleware,
  syncWithDatabaseMiddleware,
} from "./customMiddleware.js";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  persistanceLocalStorageMiddleware,
  syncWithDatabaseMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
