import { Route, Routes } from "react-router-dom";
import ClientsPage from "./clients/components/ClientsPage.js";
import HomePage from "./components/home/HomePage.js";
import ProductsPage from "./products/components/ProductsPage.js";
import SellersPage from "./sellers/components/SellersPage.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/sellers" element={<SellersPage />} />
    </Routes>
  );
};

export default App;
