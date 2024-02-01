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
import ClientRow from "./ClientRow.js";

const ClientsTable = ({ clients = [] }) => {
  console.log("updated clients table: ", clients);
  const loading = useAppSelector((state) => state.clientsReducer.loading);
  const error = useAppSelector((state) => state.clientsReducer.error);

  return (
    <Card>
      <Title>
        Tabla de Clientes
        <Badge style={{ marginLeft: "8px" }}>({clients.length} clientes)</Badge>
      </Title>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {clients.length > 0 && (
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-center">ITEM</TableHeaderCell>
              <TableHeaderCell className="text-center">RUC</TableHeaderCell>
              <TableHeaderCell className="text-center">
                RAZÓN SOCIAL
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                CONTACTO
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                DIRECCIÓN
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                DISTRITO
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                TELÉFONO
              </TableHeaderCell>
              <TableHeaderCell className="text-center">EMAIL</TableHeaderCell>
              <TableHeaderCell className="text-center">
                {" "}
                ACCIONES{" "}
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients?.map((client, index) => (
              <ClientRow key={index} {...client} item={index + 1} />
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
};

export default ClientsTable;
