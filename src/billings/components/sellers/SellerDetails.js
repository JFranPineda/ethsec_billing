const SellerDetails = ({ first_name, last_name, telephone, email }) => {
  return (
    <div>
      <h2>DETALLES DE VENDEDOR</h2>
      <p>
        <strong>Nombres</strong> {first_name}
      </p>
      <p>
        <strong>Apellidos:</strong> {last_name}
      </p>
      <p>
        <strong>Teléfono:</strong> {telephone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
};

export default SellerDetails;
