import React from "react";
// import { useAppSelector } from "../hooks/appStore.js";
import { Col, Grid } from "@tremor/react";
import ProductSelector from "../components/products/ProductSelector.js";
import ProductsTable from "../components/products/ProductsTable.js";

const ProductBillingDetails = ({ products, indexedProducts }) => {
  return (
    <>
      <Grid numItems={12}>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <ProductSelector
            products={products}
            indexedProducts={indexedProducts}
          />
        </Col>
        <Col numColSpan={12} className="mt-6">
          <ProductsTable />
        </Col>
      </Grid>
    </>
  );
};

export default ProductBillingDetails;
