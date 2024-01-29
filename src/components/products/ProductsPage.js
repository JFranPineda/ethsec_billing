import React, { useEffect, useState } from "react";
import ProductsTable from "./ProductsTable.js";

const ProductsPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://light-pink-angelfish.cyclic.app/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <h1>Product Table</h1>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsPage;
