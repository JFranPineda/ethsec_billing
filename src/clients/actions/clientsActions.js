import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../store/storeTypes.js";

export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async () => {
    try {
      const response = await axios.get(API_URL + "clients");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getClientById = createAsyncThunk(
  "clients/getClientById",
  async (clientId) => {
    try {
      const response = await axios.get(API_URL + `clients/${clientId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createClient = createAsyncThunk(
  "clients/createClient",
  async (client) => {
    console.log("Action createClient - client: ", client);
    try {
      const response = await axios.post(API_URL + "clients", client);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateClient = createAsyncThunk(
  "clients/updateClient",
  async (updatedClient) => {
    console.log("Action updateClient - updatedClient: ", updatedClient);

    try {
      const response = await axios.patch(
        API_URL + `clients/${updatedClient._id}`,
        updatedClient
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteClient = createAsyncThunk(
  "clients/deleteClient",
  async (clientId) => {
    try {
      await axios.delete(API_URL + `clients/${clientId}`);
      return clientId;
    } catch (error) {
      throw error;
    }
  }
);
