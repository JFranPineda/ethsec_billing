import { Badge, Card, Table, TableBody, TableHead, Title } from "@tremor/react";
import React from "react";
import { useAppSelector } from "../../../hooks/appStore.js";
import BillingHeader from "./BillingHeader.js";
import BillingRow from "./BillingRow.js";

const BillingsTable = ({ billings = [] }) => {
  const loading = useAppSelector((state) => state.billingsReducer.loading);
  const error = useAppSelector((state) => state.billingsReducer.error);

  return (
    <Card>
      <Title>
        Tabla de Cotizaciones
        <Badge style={{ marginLeft: "8px" }}>
          ({billings.length} cotizaciones)
        </Badge>
      </Title>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {billings.length > 0 && (
        <Table className="mt-6">
          <TableHead>
            <BillingHeader />
          </TableHead>
          <TableBody>
            {billings?.map((billing, index) => (
              <BillingRow key={index} {...billing} item={index + 1} />
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
};

export default BillingsTable;
