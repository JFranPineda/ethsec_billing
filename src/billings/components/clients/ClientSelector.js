import React from "react";
import { useAppSelector } from "../../../hooks/appStore.js";
import ClientDetails from "./ClientDetails.js";
import ClientsList from "./ClientsList.js";

const ClientSelector = ({ client_id }) => {
  const clients = useAppSelector((state) => state.clientsReducer.clients);
  const selectedClient = clients.find((client) => client._id === client_id);

  return (
    <div>
      <ClientsList clients={clients} />
      {selectedClient && <ClientDetails {...selectedClient} />}
    </div>
  );
};

export default ClientSelector;
