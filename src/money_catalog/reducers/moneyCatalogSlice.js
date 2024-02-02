import { createSlice } from "@reduxjs/toolkit";
import {
  createMoney,
  deleteMoney,
  fetchMonies,
  getMoneyById,
  updateMoney,
} from "../actions/moneyCatalogActions.js";

const initialState = {
  monies: [],
  selectedMoney: {},
  loading: false, // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const moniesSlice = createSlice({
  name: "monies",
  initialState: initialState,
  reducers: {
    rollbackMoney: (state, action) => {
      const isMoneyAlreadyDefined = state.monies?.some(
        (money) => money._id === action.payload._id
      );
      if (!isMoneyAlreadyDefined) {
        state.monies.push(action.payload);
      }
    },
    selectMoney: (state, action) => {
      const selectedMoney = state.monies?.find(
        (money) => money._id === action.payload
      );
      if (selectedMoney) state.selectedMoney = selectedMoney;
    },
    clearMoney: (state, action) => {
      state.selectedMoney = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMonies.fulfilled, (state, action) => {
        state.loading = false;
        state.monies = action.payload;
      })
      .addCase(fetchMonies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getMoneyById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMoneyById.fulfilled, (state, action) => {
        state.loading = false;
        const moneyId = action.payload;
        state.monies = state.monies?.filter((money) => money._id === moneyId);
      })
      .addCase(getMoneyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createMoney.fulfilled, (state, action) => {
        state.loading = false;
        state.monies?.push(action.payload);
      })
      .addCase(createMoney.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateMoney.fulfilled, (state, action) => {
        state.loading = false;
        const updatedMoney = action.payload ? action.payload : action.meta?.arg;
        const existingMoneyIndex = state.monies?.findIndex(
          (money) => money._id === updatedMoney._id
        );
        if (existingMoneyIndex !== -1) {
          state.monies[existingMoneyIndex] = updatedMoney;
        }
        state.selectedMoney = {};
      })
      .addCase(updateMoney.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteMoney.fulfilled, (state, action) => {
        state.loading = false;
        const moneyId = action.payload;
        state.monies = state.monies?.filter((money) => money._id !== moneyId);
      });
  },
});

export const { rollbackMoney, selectMoney, clearMoney } = moniesSlice.actions;
export default moniesSlice.reducer;
