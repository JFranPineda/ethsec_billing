import { Link } from "react-router-dom";
import { useBillingActions } from "../hooks/billingsHooks.js";

const BillingMenu = () => {
  const { addBilling } = useBillingActions();
  const navigateToCreateBilling = () => {
    addBilling();
  };
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/billings/table">Tabla de Cotizaciones</Link>
          </li>
          <li>
            <Link
              to="/billings/create"
              onClick={() => navigateToCreateBilling()}
            >
              Crear Cotización
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BillingMenu;
