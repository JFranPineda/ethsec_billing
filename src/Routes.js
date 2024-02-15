import { Route, Routes } from "react-router-dom";
import BillingDetailsPage from "./billings/pages/BillingDetailsPage.js";
import BillingMenu from "./billings/pages/BillingMenu.js";
import BillingsTablePage from "./billings/pages/BillingsTablePage.js";
import ClientsPage from "./clients/components/ClientsPage.js";
import HomePage from "./components/home/HomePage.js";
import MoniesPage from "./money_catalog/components/MoniesPage.js";
import ProductsPage from "./products/components/ProductsPage.js";
import SellersPage from "./sellers/components/SellersPage.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/sellers" element={<SellersPage />} />
      <Route path="/money_catalog" element={<MoniesPage />} />
      <Route path="/billings/create" element={<BillingDetailsPage />} />
      <Route path="/billings/table" element={<BillingsTablePage />} />
      <Route path="/billings" element={<BillingMenu />} />
    </Routes>
  );
};

export default App;
