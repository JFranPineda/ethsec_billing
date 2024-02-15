import { Card } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useAppSelector } from "../../hooks/appStore.js";
import BillingsTable from "../components/billings/BillingsTable.js";
import { useBillingActions } from "../hooks/billingsHooks.js";

const BillingsTablePage = () => {
  const billings = useAppSelector((state) => state.billingsReducer.billings);
  const { getAllBillings } = useBillingActions();

  useEffect(() => {
    getAllBillings();
  }, []);

  return (
    <Card>
      <BillingsTable billings={billings} />
      <Toaster richColors />
    </Card>
  );
};

export default BillingsTablePage;
