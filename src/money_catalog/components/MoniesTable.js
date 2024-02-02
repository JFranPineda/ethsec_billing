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
import { useAppSelector } from "../../hooks/appStore.js";
import MoneyRow from "./MoneyRow.js";

const MoniesTable = ({ monies = [] }) => {
  const loading = useAppSelector((state) => state.moniesReducer.loading);
  const error = useAppSelector((state) => state.moniesReducer.error);

  return (
    <Card>
      <Title>
        Tabla de Monedas
        <Badge style={{ marginLeft: "8px" }}>({monies.length} monedas)</Badge>
      </Title>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {monies.length > 0 && (
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-center">ITEM</TableHeaderCell>
              <TableHeaderCell className="text-center">MONEDA</TableHeaderCell>
              <TableHeaderCell className="text-center">SÍMBOLO</TableHeaderCell>
              <TableHeaderCell className="text-center">
                DESCRIPCIÓN
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                TIPO DE CAMBIO
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                {" "}
                ACCIONES{" "}
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {monies?.map((money, index) => (
              <MoneyRow key={index} {...money} item={index + 1} />
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
};

export default MoniesTable;
