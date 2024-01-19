import React, { useState, useEffect } from 'react'; 
import ProductsTable from './ProductsTable.js';

const ProductsPage = () => {
  const [products, setProducts] = useState(null);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    .then(res => res.json())
    .then(data => setProducts(data.products));
  }, []);

  useEffect(() => {
    fetch('https://light-pink-angelfish.cyclic.app/movies')
    .then(res => res.json())
    .then(movies => setMovies(movies))
  }, [])

  return (
    <div>
      <h1>Test...</h1>
      <pre id="json">{movies.map(({ title }) => title).join(', ')}</pre>
      <h1>Product Table</h1>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsPage;
