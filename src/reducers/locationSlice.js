import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  location: "Seattle, WA",
};

const locationSlice = createSlice({
  name: "locations",
  initialState: initialState,
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    changeCount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { changeLocation, changeCount } = locationSlice.actions;

export default locationSlice.reducer;
