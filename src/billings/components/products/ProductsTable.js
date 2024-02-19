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
import ProductRow from "./ProductRow.js";

const ProductsTable = () => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const loading = useAppSelector((state) => state.billingsReducer.loading);
  const error = useAppSelector((state) => state.billingsReducer.error);

  const products = selectedBilling?.products || [];
  const money_type = selectedBilling.money_type === "PEN" ? "S/." : "$";

  return (
    <Card className="mt-6">
      <Title>
        Tabla de Productos
        <Badge style={{ marginLeft: "8px" }}>
          ({products.length} productos)
        </Badge>
      </Title>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {products.length > 0 && (
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-center">ITEM</TableHeaderCell>
              <TableHeaderCell className="text-center">
                DESCRIPCIÓN
              </TableHeaderCell>
              <TableHeaderCell className="text-center">MODELO</TableHeaderCell>
              <TableHeaderCell className="text-center">
                CANTIDAD (unid.)
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                P. UNIT. ({money_type})
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                TOTAL ({money_type})
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                ACCIONES
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product, index) => (
              <ProductRow key={index} {...product} item={index + 1} />
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
};

export default ProductsTable;
