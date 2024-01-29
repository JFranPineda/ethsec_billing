import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage.js";
import ProductsPage from "./components/products/ProductsPage.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default App;
