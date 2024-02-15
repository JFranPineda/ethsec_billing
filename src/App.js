import "./App.css";
import { App as Routes } from "./Routes.js";
import GoBackButton from "./components/GoBackButton.js";

function App() {
  return (
    <div className="App">
      <GoBackButton />
      <Routes />
    </div>
  );
}

export default App;
