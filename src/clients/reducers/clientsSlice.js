import { createSlice } from "@reduxjs/toolkit";
import {
  createClient,
  deleteClient,
  fetchClients,
  getClientById,
  updateClient,
} from "../actions/clientsActions.js";

const initialState = {
  clients: [],
  selectedClient: {},
  loading: false, // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const clientsSlice = createSlice({
  name: "clients",
  initialState: initialState,
  reducers: {
    rollbackClient: (state, action) => {
      const isClientAlreadyDefined = state.clients?.some(
        (client) => client._id === action.payload._id
      );
      if (!isClientAlreadyDefined) {
        state.clients.push(action.payload);
      }
    },
    selectClient: (state, action) => {
      const selectedClient = state.clients?.find(
        (client) => client._id === action.payload
      );
      if (selectedClient) state.selectedClient = selectedClient;
    },
    clearClient: (state, action) => {
      state.selectedClient = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false;
        state.clients = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getClientById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClientById.fulfilled, (state, action) => {
        state.loading = false;
        const clientId = action.payload;
        state.clients = state.clients?.filter(
          (client) => client._id === clientId
        );
      })
      .addCase(getClientById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.loading = false;
        state.clients?.push(action.payload);
      })
      .addCase(createClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.loading = false;
        const updatedClient = action.payload
          ? action.payload
          : action.meta?.arg;
        const existingClientIndex = state.clients?.findIndex(
          (client) => client._id === updatedClient._id
        );
        if (existingClientIndex !== -1) {
          state.clients[existingClientIndex] = updatedClient;
        }
        state.selectedClient = {};
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.loading = false;
        const clientId = action.payload;
        state.clients = state.clients?.filter(
          (client) => client._id !== clientId
        );
      });
  },
});

export const { rollbackClient, selectClient, clearClient } =
  clientsSlice.actions;
export default clientsSlice.reducer;
