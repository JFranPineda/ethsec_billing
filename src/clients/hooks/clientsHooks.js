import { useAppDispatch } from "../../hooks/appStore.js";
import {
  createClient,
  deleteClient,
  fetchClients,
  getClientById,
  updateClient,
} from "../actions/clientsActions.js";
import { clearClient, selectClient } from "../reducers/clientsSlice.js";

export const useClientActions = () => {
  const dispatch = useAppDispatch();

  const getAllClients = () => {
    dispatch(fetchClients());
  };

  const getClientWithId = (clientId) => {
    dispatch(getClientById(clientId));
  };

  const editClient = (clientId) => {
    dispatch(selectClient(clientId));
  };

  const clearCurrentClient = () => {
    dispatch(clearClient());
  };

  const addClient = (newClient) => {
    dispatch(createClient(newClient));
  };

  const modifyClient = (updatedClient) => {
    dispatch(updateClient({ ...updatedClient }));
  };

  const removeClient = (clientId) => {
    dispatch(deleteClient(clientId));
  };

  return {
    getAllClients,
    getClientWithId,
    addClient,
    modifyClient,
    removeClient,
    editClient,
    clearCurrentClient,
  };
};
