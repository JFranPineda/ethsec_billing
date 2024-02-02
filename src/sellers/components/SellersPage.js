import { Card } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useAppSelector } from "../../hooks/appStore.js";
import { useSellerActions } from "../hooks/sellersHooks.js";
import CreateNewSeller from "./CreateNewSeller.js";
import SellersTable from "./SellersTable.js";

const SellersPage = () => {
  const sellers = useAppSelector((state) => state.sellersReducer.sellers);
  const { getAllSellers } = useSellerActions();

  useEffect(() => {
    getAllSellers();
  }, []);

  return (
    <Card>
      <SellersTable sellers={sellers} />
      <CreateNewSeller />
      <Toaster richColors />
    </Card>
  );
};

export default SellersPage;
