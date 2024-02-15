const MoneyDetails = ({ currency, symbol, description }) => {
  return (
    <div>
      <h2>DETALLES DE MONEDA</h2>
      <p>
        <strong>Moneda: </strong> {currency}
      </p>
      <p>
        <strong>Símbolo:</strong> {symbol}
      </p>
      <p>
        <strong>Descripción:</strong> {description}
      </p>
    </div>
  );
};

export default MoneyDetails;
