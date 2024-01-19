import { App as Routes } from './Routes'
import { Link } from "react-router-dom";
import './App.css';

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
          </ul>
        </nav>
      </div>
      <Routes/>
    </div>
  );
}

export default App;
