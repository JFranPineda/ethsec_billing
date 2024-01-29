import React from 'react';
import ProductRow from './ProductRow.js';

const ProductsTable = ({ products = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ITEM</th>
          <th>MODELO</th>
          <th>DESCRIPCION</th>
          <th>CANTIDAD</th>
          <th>P. UNIT. SIN IGV</th>
          <th>P. UNIT. CON IGV USD</th>
          <th>P. UNIT. SIN IGV SOLES</th>
          <th>P. UNIT. CON IGV SOLES</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => (
          <ProductRow key={index} {...product} item = {index + 1}/>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
