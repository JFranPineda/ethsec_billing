import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ProductsPage from "./components/products/ProductsPage"
import ProductsTable from "./components/products/ProductsTable"

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsTable />} />
            <Route path="/products" element={<ProductsPage />}/>
        </Routes>
    )
}

export default App;