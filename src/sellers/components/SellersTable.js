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
import SellerRow from "./SellerRow.js";

const SellersTable = ({ sellers = [] }) => {
  const loading = useAppSelector((state) => state.sellersReducer.loading);
  const error = useAppSelector((state) => state.sellersReducer.error);

  return (
    <Card>
      <Title>
        Tabla de Vendedores
        <Badge style={{ marginLeft: "8px" }}>
          ({sellers.length} vendedores)
        </Badge>
      </Title>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {sellers.length > 0 && (
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-center">ITEM</TableHeaderCell>
              <TableHeaderCell className="text-center">NOMBRES</TableHeaderCell>
              <TableHeaderCell className="text-center">
                APELLIDOS
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
            {sellers?.map((seller, index) => (
              <SellerRow key={index} {...seller} item={index + 1} />
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
};

export default SellersTable;
