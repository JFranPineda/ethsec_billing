import { Card } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useAppSelector } from "../../hooks/appStore.js";
import { useClientActions } from "../hooks/clientsHooks.js";
import ClientsTable from "./ClientsTable.js";
import CreateNewClient from "./CreateNewClient.js";

const ClientsPage = () => {
  const clients = useAppSelector((state) => state.clientsReducer.clients);
  const { getAllClients } = useClientActions();

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <Card>
      <ClientsTable clients={clients} />
      <CreateNewClient />
      <Toaster richColors />
    </Card>
  );
};

export default ClientsPage;
