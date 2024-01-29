import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Yazman Rodriguez",
    email: "yazmanito@gmail.com",
    github: "yazmanito",
  },
  {
    id: "2",
    name: "John Doe",
    email: "leo@gmail.com",
    github: "leo",
  },
  {
    id: "3",
    name: "Haakon Dahlberg",
    email: "haakon@gmail.com",
    github: "midudev",
  },
];

const initialState = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
    },
    deleteUserById: (state, action) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
    rollbackUser: (state, action) => {
      const isUserAlreadyDefined = state.some(
        (user) => user.id === action.payload.id
      );
      if (!isUserAlreadyDefined) {
        state.push(action.payload);
      }
    },
  },
});

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;

export default usersSlice.reducer;
