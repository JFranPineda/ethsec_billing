import { Card } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useClientActions } from "../../clients/hooks/clientsHooks.js";
import { useAppSelector } from "../../hooks/appStore.js";
import { useMoneyCatalogActions } from "../../money_catalog/hooks/moneyCatalogHooks.js";
import { useSellerActions } from "../../sellers/hooks/sellersHooks.js";
import ClientSelector from "../components/clients/ClientSelector.js";
import IgvSelector from "../components/igv/IgvSelector.js";
import MoneySelector from "../components/money_catalog/MoneySelector.js";
import SellerSelector from "../components/sellers/SellerSelector.js";

const BillingDetailsPage = () => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const {
    client_id = null,
    seller_id = null,
    money_type = null,
  } = selectedBilling;
  const { getAllClients } = useClientActions();
  const { getAllSellers } = useSellerActions();
  const { getAllMonies } = useMoneyCatalogActions();

  useEffect(() => {
    getAllClients();
    getAllSellers();
    getAllMonies();
  }, []);

  return (
    <Card>
      <ClientSelector client_id={client_id} />
      <MoneySelector money_type={money_type} />
      <SellerSelector seller_id={seller_id} />
      <IgvSelector />
      <Toaster richColors />
    </Card>
  );
};

export default BillingDetailsPage;
