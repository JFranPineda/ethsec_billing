import { Card } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useAppSelector } from "../../hooks/appStore.js";
import { useProductActions } from "../hooks/productsHooks.js";
import { CreateNewProduct } from "./CreateNewProduct.js";
import ProductsTable from "./ProductsTable.js";

const ProductsPage = () => {
  const products = useAppSelector((state) => state.productsReducer.products);
  const { getAllProducts } = useProductActions();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Card>
      <ProductsTable products={products} />
      <CreateNewProduct />
      <Toaster richColors />
    </Card>
  );
};

export default ProductsPage;
