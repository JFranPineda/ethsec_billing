import { Card } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useAppSelector } from "../../hooks/appStore.js";
import { useMoneyCatalogActions } from "../hooks/moneyCatalogHooks.js";
import CreateNewMoney from "./CreateNewMoney.js";
import MoniesTable from "./MoniesTable.js";

const MoniesPage = () => {
  const monies = useAppSelector((state) => state.moniesReducer.monies);
  const { getAllMonies } = useMoneyCatalogActions();

  useEffect(() => {
    getAllMonies();
  }, []);

  return (
    <Card>
      <MoniesTable monies={monies} />
      <CreateNewMoney />
      <Toaster richColors />
    </Card>
  );
};

export default MoniesPage;
