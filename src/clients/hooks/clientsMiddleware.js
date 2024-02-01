import { toast } from "sonner";
import { rollbackClient } from "../reducers/clientsSlice.js";

export const syncClientDeleteWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    console.log("action client middleware: ", action);
    const previousState = store.getState();
    next(action);

    const prm = payload ? payload : meta?.arg;

    if (type.includes("clients/deleteClient")) {
      const clientIdToRemove = prm;
      const clientToRemove = previousState?.clientsReducer?.clients.find(
        (client) => client._id === clientIdToRemove
      );
      if (type.endsWith("/fulfilled")) {
        toast.success(
          `Cliente ${clientToRemove.company_name} eliminado correctamente`
        );
      }
      if (type.endsWith("/rejected")) {
        toast.error(
          `Error deleting client ${clientToRemove.company_name} - ${clientIdToRemove}`
        );
        if (clientToRemove) store.dispatch(rollbackClient(clientToRemove));
      }
    }

    if (type.includes("clients/createClient")) {
      const client = prm;
      if (type.endsWith("/fulfilled")) {
        toast.success(`Cliente ${client.company_name} creado correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error creating client ${client.company_name}`);
      }
    }

    if (type.includes("clients/fetchClients")) {
      if (type.endsWith("/fulfilled")) {
        toast.success(`Lista de clientes obtenida correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error getting clients list`);
      }
    }

    if (type.includes("clients/updateClient")) {
      const updatedClient = prm;
      if (type.endsWith("/fulfilled")) {
        toast.success(`Cliente ${updatedClient._id} actualizado correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error updating client ${updatedClient.company_name}`);
      }
    }
  };
