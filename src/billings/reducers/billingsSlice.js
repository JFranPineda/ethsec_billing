import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  createBilling,
  deleteBilling,
  deleteProduct,
  fetchBillings,
  generateBillingPdf,
  getBillingById,
  modifyProductQuantity,
  updateBilling,
  updateMoneyType,
  updateWithIgv,
} from "../actions/billingsActions.js";

const initialState = {
  billings: [],
  selectedBilling: {},
  selectedBillingProduct: {},
  billingPdf: "",
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
    selectProduct: (state, action) => {
      const { _id } = action.payload;
      if (_id) {
        state.selectedBillingProduct = action.payload;
      }
    },
    clearProduct: (state, action) => {
      state.selectedBillingProduct = {};
    },
    clearBillingPdf: (state, action) => {
      state.billingPdf = "";
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
        state.error = null;
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
        state.error = null;
        state.selectedBilling = action.payload;
      })
      .addCase(getBillingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(generateBillingPdf.fulfilled, (state, action) => {
        state.loading = false;
        state.billingPdf = action.payload;
        state.error = null;
      })
      .addCase(generateBillingPdf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createBilling.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selectedBilling = action.payload;
        state.billings?.push(action.payload);
      })
      .addCase(createBilling.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBilling.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
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
        state.error = null;
        const billingId = action.payload;
        state.billings = state.billings?.filter(
          (billing) => billing._id !== billingId
        );
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
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
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(modifyProductQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
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
      .addCase(modifyProductQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { _id, product } = action.meta?.arg;
        const existingBillingIndex = state.billings?.findIndex(
          (billing) => billing._id === _id
        );
        if (existingBillingIndex !== -1) {
          const existingBilling = state.billings[existingBillingIndex];
          const newProducts = existingBilling?.products.filter(
            (prod) => prod._id !== product._id
          );
          const newBilling = {
            ...existingBilling,
            products: newProducts,
          };
          state.billings[existingBillingIndex] = newBilling;
          state.selectedBilling = newBilling;
        }
      })
      .addCase(updateMoneyType.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
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
      .addCase(updateMoneyType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateWithIgv.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
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
      .addCase(updateWithIgv.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  rollbackBilling,
  selectBilling,
  clearBilling,
  selectProduct,
  clearProduct,
  clearBillingPdf,
} = billingsSlice.actions;
export default billingsSlice.reducer;
