import { Link } from "react-router-dom";
const MenuComponent = () => {
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/billings">Cotizaciones</Link>
          </li>
          <li>
            <Link to="/clients">Clientes</Link>
          </li>
          <li>
            <Link to="/money_catalog">Monedas</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/sellers">Vendedores</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuComponent;
