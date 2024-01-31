import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/appStore.js";
import { useProductActions } from "../hooks/productsHooks.js";
import ProductsTable from "./ProductsTable.js";

const ProductsPage = () => {
  const products = useAppSelector((state) => state.productsReducer.products);
  const {
    getAllProducts,
    getProductWithId,
    addProduct,
    modifyProduct,
    removeProduct,
  } = useProductActions();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Product Table</h1>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsPage;
