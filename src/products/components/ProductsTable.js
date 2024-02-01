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
import ProductRow from "./ProductRow.js";

const ProductsTable = ({ products = [] }) => {
  const loading = useAppSelector((state) => state.productsReducer.loading);
  const error = useAppSelector((state) => state.productsReducer.error);
  return (
    <Card>
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
              <TableHeaderCell className="text-center">MODELO</TableHeaderCell>
              <TableHeaderCell className="text-center">
                DESCRIPCION
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                CANTIDAD (unid.)
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                P. UNIT. SIN IGV ($)
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                P. UNIT. CON IGV ($)
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                P. UNIT. SIN IGV (S/.)
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                P. UNIT. CON IGV (S/.)
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                {" "}
                ACCIONES{" "}
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
