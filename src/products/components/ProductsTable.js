import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import React from "react";
import ProductRow from "./ProductRow.js";

const ProductsTable = ({ products = [] }) => {
  return (
    <Table className="mt-6">
      <TableHead>
        <TableRow>
          <TableHeaderCell className="text-center">ITEM</TableHeaderCell>
          <TableHeaderCell className="text-center">MODELO</TableHeaderCell>
          <TableHeaderCell className="text-center">DESCRIPCION</TableHeaderCell>
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
          <TableHeaderCell className="text-center"> ACCIONES </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products?.map((product, index) => (
          <ProductRow key={index} {...product} item={index + 1} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
