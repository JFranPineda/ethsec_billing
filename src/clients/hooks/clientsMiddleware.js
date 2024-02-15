import { actionAppHandler } from "../../hooks/actionMiddleware.js";
import {
  getClientById,
  handleCreateClient,
  handleDeleteClient,
  handleFetchClients,
  handleUpdateClient,
} from "./clientsUtils.js";

export const syncClientWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    const previousState = store.getState();
    next(action);
    const actionClientsHandlers = {
      "clients/deleteClient": () => {
        const clientIdToRemove = payload || meta?.arg;
        const clientToRemove = getClientById({
          previousState,
          clientId: clientIdToRemove,
        });
        handleDeleteClient({ store, type, clientToRemove });
      },
      "clients/createClient": () => {
        const client = payload || meta?.arg;
        handleCreateClient({ type, client });
      },
      "clients/fetchClients": () => {
        handleFetchClients(type);
      },
      "clients/updateClient": () => {
        const updatedClient = payload || meta?.arg;
        handleUpdateClient({ type, updatedClient });
      },
    };
    actionAppHandler({ actionHandlers: actionClientsHandlers, type });
  };
