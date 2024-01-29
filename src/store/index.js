import { configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import rootReducer from "../reducers/index.js";
import { rollbackUser } from "../reducers/usersSlice.js";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

const syncWithDatabaseMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  const previousState = store.getState();
  next(action);

  if (type === "users/deleteUserById") {
    const userIdToRemove = payload;
    const userToRemove = previousState.users.find(
      (user) => user.id === userIdToRemove
    );

    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
      method: "DELETE",
    })
      .then((res) => {
        throw new Error("Error al eliminar el usuario");
      })
      .catch((err) => {
        toast.error(`Error deleting user ${userIdToRemove}`);
        if (userToRemove) store.dispatch(rollbackUser(userToRemove));
        console.log(err);
        console.log("error");
      });
  }
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(persistanceLocalStorageMiddleware)
      .concat(syncWithDatabaseMiddleware),
});

export default store;
