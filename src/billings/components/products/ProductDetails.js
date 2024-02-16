const ProductDetails = ({
  model,
  description,
  price_non_igv,
  price_igv,
  price_pen_non_igv,
  price_pen_igv,
}) => {
  return (
    <div>
      <h2>DETALLES DE PRODUCTO</h2>
      <p>
        <strong>Modelo: </strong> {model}
      </p>
      <p>
        <strong>Descripción:</strong> {description}
      </p>
      <p>
        <strong>Precio USD (sin IGV):</strong> {price_non_igv}
      </p>
      <p>
        <strong>Precio USD (con IGV):</strong> {price_igv}
      </p>
      <p>
        <strong>Precio PEN (sin IGV):</strong> {price_pen_non_igv}
      </p>
      <p>
        <strong>Precio PEN (con IGV):</strong> {price_pen_igv}
      </p>
    </div>
  );
};

export default ProductDetails;
