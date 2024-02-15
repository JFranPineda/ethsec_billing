import {
  Badge,
  Card,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import React from "react";
import { useAppSelector } from "../../../hooks/appStore.js";
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
            <TableRow>
              <TableHeaderCell className="text-center">NÚMERO</TableHeaderCell>
              <TableHeaderCell className="text-center">CLIENTE</TableHeaderCell>
              <TableHeaderCell className="text-center">
                VENDEDOR
              </TableHeaderCell>
              <TableHeaderCell className="text-center">MONEDA</TableHeaderCell>
              <TableHeaderCell className="text-center">
                SUBTOTAL
              </TableHeaderCell>
              <TableHeaderCell className="text-center">IGV</TableHeaderCell>
              <TableHeaderCell className="text-center">TOTAL</TableHeaderCell>
              <TableHeaderCell className="text-center">
                DÍAS DE VALIDEZ
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                PRODUCTOS
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                {" "}
                ACCIONES{" "}
              </TableHeaderCell>
            </TableRow>
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
