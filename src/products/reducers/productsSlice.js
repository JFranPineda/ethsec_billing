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
  reducers: {},
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
          (product) => product.id === productId
        );
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const existingProductIndex = state.products.findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (existingProductIndex !== -1) {
          state.products[existingProductIndex] = updatedProduct;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter(
          (product) => product.id !== productId
        );
      });
  },
});

export default productsSlice.reducer;
