import { toast } from "sonner";
import { rollbackClient } from "../reducers/clientsSlice.js";

export const getClientById = ({ previousState, clientId }) =>
  previousState?.clientsReducer?.clients.find(
    (client) => client._id === clientId
  );

export const handleDeleteClient = ({ store, type, clientToRemove }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(
      `Cliente ${clientToRemove.company_name} eliminado correctamente`
    );
  }
  if (type.endsWith("/rejected")) {
    toast.error(
      `Error deleting client ${clientToRemove.company_name} - ${clientToRemove._id}`
    );
    if (clientToRemove) store.dispatch(rollbackClient(clientToRemove));
  }
};

export const handleCreateClient = ({ type, client }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Cliente ${client.company_name} creado correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error creating client ${client.company_name}`);
  }
};

export const handleFetchClients = (type) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Lista de clientes obtenida correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error getting clients list`);
  }
};

export const handleUpdateClient = ({ type, updatedClient }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Cliente ${updatedClient._id} actualizado correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error updating client ${updatedClient.company_name}`);
  }
};
