import { createSlice } from "@reduxjs/toolkit";
import {
  createBilling,
  deleteBilling,
  fetchBillings,
  getBillingById,
  updateBilling,
} from "../actions/billingsActions.js";

const initialState = {
  billings: [],
  selectedBilling: {},
  loading: false, // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const billingsSlice = createSlice({
  name: "billings",
  initialState: initialState,
  reducers: {
    rollbackBilling: (state, action) => {
      const isBillingAlreadyDefined = state.billings?.some(
        (billing) => billing._id === action.payload._id
      );
      if (!isBillingAlreadyDefined) {
        state.billings.push(action.payload);
      }
    },
    selectBilling: (state, action) => {
      const selectedBilling = state.billings?.find(
        (billing) => billing._id === action.payload
      );
      if (selectedBilling) state.selectedBilling = selectedBilling;
    },
    clearBilling: (state, action) => {
      state.selectedBilling = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBillings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBillings.fulfilled, (state, action) => {
        state.loading = false;
        state.billings = action.payload;
      })
      .addCase(fetchBillings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBillingById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBillingById.fulfilled, (state, action) => {
        state.loading = false;
        const billingId = action.payload;
        state.billings = state.billings?.filter(
          (billing) => billing._id === billingId
        );
      })
      .addCase(getBillingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createBilling.fulfilled, (state, action) => {
        state.loading = false;
        console.log("creating Billing: ", action.payload);
        state.selectedBilling = action.payload;
        state.billings?.push(action.payload);
      })
      .addCase(createBilling.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBilling.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBilling = action.payload
          ? action.payload
          : action.meta?.arg;
        const existingBillingIndex = state.billings?.findIndex(
          (billing) => billing._id === updatedBilling._id
        );
        if (existingBillingIndex !== -1) {
          state.billings[existingBillingIndex] = updatedBilling;
        }
        state.selectedBilling = updatedBilling;
      })
      .addCase(updateBilling.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBilling.fulfilled, (state, action) => {
        state.loading = false;
        const billingId = action.payload;
        state.billings = state.billings?.filter(
          (billing) => billing._id !== billingId
        );
      });
  },
});

export const { rollbackBilling, selectBilling, clearBilling } =
  billingsSlice.actions;
export default billingsSlice.reducer;
