import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../store/storeTypes.js";

export const fetchSellers = createAsyncThunk(
  "sellers/fetchSellers",
  async () => {
    try {
      const response = await axios.get(API_URL + "sellers");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getSellerById = createAsyncThunk(
  "sellers/getSellerById",
  async (sellerId) => {
    try {
      const response = await axios.get(API_URL + `sellers/${sellerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createSeller = createAsyncThunk(
  "sellers/createSeller",
  async (seller) => {
    try {
      const response = await axios.post(API_URL + "sellers", seller);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateSeller = createAsyncThunk(
  "sellers/updateSeller",
  async (updatedSeller) => {
    try {
      const response = await axios.patch(
        API_URL + `sellers/${updatedSeller._id}`,
        updatedSeller
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteSeller = createAsyncThunk(
  "sellers/deleteSeller",
  async (sellerId) => {
    try {
      await axios.delete(API_URL + `sellers/${sellerId}`);
      return sellerId;
    } catch (error) {
      throw error;
    }
  }
);
