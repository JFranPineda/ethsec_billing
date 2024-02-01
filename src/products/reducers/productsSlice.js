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
  selectedProduct: {},
  loading: false, // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    rollbackProduct: (state, action) => {
      const isProductAlreadyDefined = state.products?.some(
        (product) => product._id === action.payload._id
      );
      if (!isProductAlreadyDefined) {
        state.products.push(action.payload);
      }
    },
    selectProduct: (state, action) => {
      const selectedProduct = state.products?.find(
        (product) => product._id === action.payload
      );
      if (selectedProduct) state.selectedProduct = selectedProduct;
    },
    clearProduct: (state, action) => {
      state.selectedProduct = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        const productId = action.payload;
        state.products = state.products?.filter(
          (product) => product._id === productId
        );
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products?.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload
          ? action.payload
          : action.meta?.arg;
        const existingProductIndex = state.products?.findIndex(
          (product) => product._id === updatedProduct.id
        );
        if (existingProductIndex !== -1) {
          state.products[existingProductIndex] = updatedProduct;
        }
        state.selectedProduct = {};
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        const productId = action.payload;
        state.products = state.products?.filter(
          (product) => product._id !== productId
        );
      });
  },
});

export const { rollbackProduct, selectProduct, clearProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
