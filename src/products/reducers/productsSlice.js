import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  getProductById,
  updateProduct,
} from "../actions/productsActions.js";

const initialState = {
  products: [],
  status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    rollbackProduct: (state, action) => {
      const isProductAlreadyDefined = state.products.some(
        (product) => product._id === action.payload._id
      );
      if (!isProductAlreadyDefined) {
        state.products.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter(
          (product) => product._id === productId
        );
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const existingProductIndex = state.products.findIndex(
          (product) => product._id === updatedProduct._id
        );
        if (existingProductIndex !== -1) {
          state.products[existingProductIndex] = updatedProduct;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter(
          (product) => product._id !== productId
        );
      });
  },
});

export const { rollbackProduct } = productsSlice.actions;
export default productsSlice.reducer;
