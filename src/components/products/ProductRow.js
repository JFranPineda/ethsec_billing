import React from 'react';

const ProductRow = ({
  id, //item,
  modelo,
  title,  //descripcion,
  cantidad,
  price,  //sinIgvUSD,
  conIgvUSD,
  sinIgvSoles,
  conIgvSoles,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{modelo}</td>
      <td>{title}</td>
      <td>{cantidad}</td>
      <td>{price}</td>
      <td>{conIgvUSD}</td>
      <td>{sinIgvSoles}</td>
      <td>{conIgvSoles}</td>
    </tr>
  );
};

export default ProductRow;
