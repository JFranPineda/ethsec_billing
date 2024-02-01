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
    console.log("editClient: ", clientId);
    dispatch(selectClient(clientId));
  };

  const clearCurrentClient = () => {
    dispatch(clearClient());
  };

  const addClient = (newClient) => {
    console.log("before add - clientId: ", newClient);
    dispatch(createClient(newClient));
  };

  const modifyClient = (updatedClient) => {
    console.log("before update - updatedClient: ", updatedClient);
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
