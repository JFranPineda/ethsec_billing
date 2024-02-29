import { TableHeaderCell, TableRow } from "@tremor/react";
import React from "react";

const BillingHeader = () => {
  return (
    <TableRow>
      <TableHeaderCell className="text-center">NÚMERO</TableHeaderCell>
      <TableHeaderCell className="text-center">CLIENTE</TableHeaderCell>
      <TableHeaderCell className="text-center">VENDEDOR</TableHeaderCell>
      <TableHeaderCell className="text-center">MONEDA</TableHeaderCell>
      <TableHeaderCell className="text-center">SUBTOTAL</TableHeaderCell>
      <TableHeaderCell className="text-center">IGV</TableHeaderCell>
      <TableHeaderCell className="text-center">TOTAL</TableHeaderCell>
      <TableHeaderCell className="text-center">DÍAS DE VALIDEZ</TableHeaderCell>
      <TableHeaderCell className="text-center">PRODUCTOS</TableHeaderCell>
      <TableHeaderCell className="text-center"> ACCIONES </TableHeaderCell>
    </TableRow>
  );
};

export default BillingHeader;
