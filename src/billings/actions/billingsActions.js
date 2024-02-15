import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../store/storeTypes.js";

export const fetchBillings = createAsyncThunk(
  "billings/fetchBillings",
  async () => {
    try {
      const response = await axios.get(API_URL + "billings");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getBillingById = createAsyncThunk(
  "billings/getBillingById",
  async (billingId) => {
    try {
      const response = await axios.get(API_URL + `billings/${billingId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createBilling = createAsyncThunk(
  "billings/createBilling",
  async (billing) => {
    try {
      const response = await axios.post(
        API_URL + "billings/?isNewBill=true",
        billing
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateBilling = createAsyncThunk(
  "billings/updateBilling",
  async (updatedBilling) => {
    try {
      const response = await axios.patch(
        API_URL + `billings/${updatedBilling._id}`,
        updatedBilling
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteBilling = createAsyncThunk(
  "billings/deleteBilling",
  async (billingId) => {
    try {
      await axios.delete(API_URL + `billings/${billingId}`);
      return billingId;
    } catch (error) {
      throw error;
    }
  }
);

// { with_igv: BOOLEAN, _id: STRING }
export const updateWithIgv = createAsyncThunk(
  "billings/updateWithIgv",
  async (updatedBilling) => {
    try {
      const response = await axios.patch(
        API_URL + `billings/${updatedBilling._id}/updateWithIgv`,
        updatedBilling
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// { money_type: STRING, _id: STRING }
export const updateMoneyType = createAsyncThunk(
  "billings/updateMoneyType",
  async (updatedBilling) => {
    try {
      const response = await axios.patch(
        API_URL + `billings/${updatedBilling._id}/updateMoneyType`,
        updatedBilling
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// { _id: STRING,
//   product: { _id: STRING, model: STRING, description: STRING, price_non_igv: NUMBER, price_igv: NUMBER, price_pen_non_igv: NUMBER, item: INTEGER }
// }
export const addProduct = createAsyncThunk(
  "billings/addProduct",
  async (updatedBilling) => {
    try {
      const response = await axios.patch(
        API_URL + `billings/${updatedBilling._id}/addProduct`,
        updatedBilling
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// { _id: STRING,
//   product:  { _id: STRING, reserved_quantity: INTEGER, unit_price: NUMBER, item: STRING }
// }
export const modifyProductQuantity = createAsyncThunk(
  "billings/modifyProductQuantity",
  async (updatedBilling) => {
    try {
      const response = await axios.patch(
        API_URL + `billings/${updatedBilling._id}/modifyProductQuantity`,
        updatedBilling
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// { _id: STRING,
//   product:  { _id: STRING, item: STRING }
// }
export const deleteProduct = createAsyncThunk(
  "billings/deleteProduct",
  async (updatedBilling) => {
    try {
      const response = await axios.patch(
        API_URL + `billings/${updatedBilling._id}/deleteProduct`,
        updatedBilling
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
