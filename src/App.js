import { Link } from "react-router-dom";
import "./App.css";
import { App as Routes } from "./Routes.js";

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/clients">Clientes</Link>
            </li>
            <li>
              <Link to="/sellers">Vendedores</Link>
            </li>
            <li>
              <Link to="/money_catalog">Monedas</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes />
    </div>
  );
}

export default App;
