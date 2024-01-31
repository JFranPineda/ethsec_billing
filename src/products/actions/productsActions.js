import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://light-pink-angelfish.cyclic.app/";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(API_URL + "/products");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId) => {
    try {
      const response = await axios.get(API_URL + `products/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    try {
      const response = await axios.post(API_URL + "products", product);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (updatedProduct) => {
    try {
      const response = await axios.put(
        API_URL + `products/${updatedProduct.id}`,
        updatedProduct
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProducts",
  async (productId) => {
    try {
      await axios.delete(API_URL + `products/${productId}`);
      return productId;
    } catch (error) {
      throw error;
    }
  }
);
