import { Card } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useClientActions } from "../../clients/hooks/clientsHooks.js";
import { useAppSelector } from "../../hooks/appStore.js";
import ClientSelector from "../components/clients/ClientSelector.js";

const BillingDetailsPage = () => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const { client_id = null } = selectedBilling;
  const { getAllClients } = useClientActions();
  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <Card>
      <ClientSelector client_id={client_id} />
      <Toaster richColors />
    </Card>
  );
};

export default BillingDetailsPage;
