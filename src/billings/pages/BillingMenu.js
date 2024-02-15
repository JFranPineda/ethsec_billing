import { Button } from "@tremor/react";
import { Link } from "react-router-dom";
import { useAppNavigate } from "../../hooks/appNavigation.js";
import { useBillingActions } from "../hooks/billingsHooks.js";

const BillingMenu = () => {
  const { addBilling } = useBillingActions();
  const navigate = useAppNavigate();

  const navigateToCreateBilling = () => {
    addBilling();
    navigate("/billings/create");
  };
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/billings/table">Tabla de Cotizaciones</Link>
          </li>
          <li>
            <Button onClick={() => navigateToCreateBilling()}>
              Crear Cotización
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BillingMenu;
