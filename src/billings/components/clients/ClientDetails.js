const ClientDetails = ({
  company_name,
  ruc,
  address,
  city,
  contact,
  telephone,
}) => {
  return (
    <div>
      <h2>DETALLES DE CLIENTE</h2>
      <p>
        <strong>Cliente</strong> {company_name}
      </p>
      <p>
        <strong>RUC:</strong> {ruc}
      </p>
      <p>
        <strong>Dirección:</strong> {address}
      </p>
      <p>
        <strong>Ciudad:</strong> {city}
      </p>
      <p>
        <strong>Contacto:</strong> {contact}
      </p>
      <p>
        <strong>Teléfono:</strong> {telephone}
      </p>
    </div>
  );
};

export default ClientDetails;
