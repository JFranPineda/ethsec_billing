import React, { useState, useEffect } from 'react'; 
import ProductsTable from './ProductsTable.js';

const ProductsPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    .then(res => res.json())
    .then(data => setProducts(data.products));
  }, []);

  useEffect(() => {
    fetch('https://light-pink-angelfish.cyclic.app/movies')
    .then(res => res.json())
    .then(movies => console.log('movies: ', movies));
  }, [])

  return (
    <div>
      <h1>Product Table</h1>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsPage;
