import { createSlice } from "@reduxjs/toolkit";
import {
  createSeller,
  deleteSeller,
  fetchSellers,
  getSellerById,
  updateSeller,
} from "../actions/sellersActions.js";

const initialState = {
  sellers: [],
  selectedSeller: {},
  loading: false, // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const sellersSlice = createSlice({
  name: "sellers",
  initialState: initialState,
  reducers: {
    rollbackSeller: (state, action) => {
      const isSellerAlreadyDefined = state.sellers?.some(
        (seller) => seller._id === action.payload._id
      );
      if (!isSellerAlreadyDefined) {
        state.sellers.push(action.payload);
      }
    },
    selectSeller: (state, action) => {
      const selectedSeller = state.sellers?.find(
        (seller) => seller._id === action.payload
      );
      if (selectedSeller) state.selectedSeller = selectedSeller;
    },
    clearSeller: (state, action) => {
      state.selectedSeller = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSellers.fulfilled, (state, action) => {
        state.loading = false;
        state.sellers = action.payload;
      })
      .addCase(fetchSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSellerById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSellerById.fulfilled, (state, action) => {
        state.loading = false;
        const sellerId = action.payload;
        state.sellers = state.sellers?.filter(
          (seller) => seller._id === sellerId
        );
      })
      .addCase(getSellerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createSeller.fulfilled, (state, action) => {
        state.loading = false;
        state.sellers?.push(action.payload);
      })
      .addCase(createSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateSeller.fulfilled, (state, action) => {
        state.loading = false;
        const updatedSeller = action.payload
          ? action.payload
          : action.meta?.arg;
        const existingSellerIndex = state.sellers?.findIndex(
          (seller) => seller._id === updatedSeller._id
        );
        if (existingSellerIndex !== -1) {
          state.sellers[existingSellerIndex] = updatedSeller;
        }
        state.selectedSeller = {};
      })
      .addCase(updateSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteSeller.fulfilled, (state, action) => {
        state.loading = false;
        const sellerId = action.payload;
        state.sellers = state.sellers?.filter(
          (seller) => seller._id !== sellerId
        );
      });
  },
});

export const { rollbackSeller, selectSeller, clearSeller } =
  sellersSlice.actions;
export default sellersSlice.reducer;
