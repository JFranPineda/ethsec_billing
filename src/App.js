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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/sellers">Vendedores</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes />
    </div>
  );
}

export default App;
