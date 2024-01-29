import React from 'react';

const ProductRow = ({
  item,
  _id, //item,
  model,
  description,
  quantity,
  price_non_igv,
  price_igv,
  price_pen_non_igv,
  price_pen_igv
}) => {
  return (
    <tr>
      <td>{item}</td>
      <td>{model}</td>
      <td>{description}</td>
      <td>{quantity}</td>
      <td>{price_non_igv}</td>
      <td>{price_igv}</td>
      <td>{price_pen_non_igv}</td>
      <td>{price_pen_igv}</td>
    </tr>
  );
};

export default ProductRow;
