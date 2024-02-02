import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../store/storeTypes.js";

export const fetchMonies = createAsyncThunk(
  "money_catalog/fetchMonies",
  async () => {
    try {
      const response = await axios.get(API_URL + "money_catalog");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getMoneyById = createAsyncThunk(
  "money_catalog/getMoneyById",
  async (moneyId) => {
    try {
      const response = await axios.get(API_URL + `money_catalog/${moneyId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createMoney = createAsyncThunk(
  "money_catalog/createMoney",
  async (money) => {
    try {
      const response = await axios.post(API_URL + "money_catalog", money);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateMoney = createAsyncThunk(
  "money_catalog/updateMoney",
  async (updatedMoney) => {
    try {
      const response = await axios.patch(
        API_URL + `money_catalog/${updatedMoney._id}`,
        updatedMoney
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteMoney = createAsyncThunk(
  "money_catalog/deleteMoney",
  async (moneyId) => {
    try {
      await axios.delete(API_URL + `money_catalog/${moneyId}`);
      return moneyId;
    } catch (error) {
      throw error;
    }
  }
);
