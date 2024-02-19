import { Card, Title } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useClientActions } from "../../clients/hooks/clientsHooks.js";
import { useAppSelector } from "../../hooks/appStore.js";
import { useMoneyCatalogActions } from "../../money_catalog/hooks/moneyCatalogHooks.js";
import { useProductActions } from "../../products/hooks/productsHooks.js";
import { useSellerActions } from "../../sellers/hooks/sellersHooks.js";
import TopBillingDetails from "../components/TopBillingDetails.js";

import BottomBillingDetails from "../components/BottomBillingDetails.js";
import ProductBillingDetails from "../components/ProductBillingDetails.js";
import { useBillingActions } from "../hooks/billingsHooks.js";

const BillingDetailsPage = () => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const products = useAppSelector((state) => state.productsReducer.products);
  const indexedProducts = products.reduce(function (map, obj) {
    map[obj._id] = obj;
    return map;
  }, {});

  const { getAllClients } = useClientActions();
  const { getAllSellers } = useSellerActions();
  const { getAllProducts } = useProductActions();
  const { clearBillingProduct } = useBillingActions();
  const { getAllMonies } = useMoneyCatalogActions();

  useEffect(() => {
    getAllClients();
    getAllSellers();
    getAllMonies();
    getAllProducts();
    clearBillingProduct();
  }, []);

  return (
    <Card>
      <Title>COTIZACIÓN N° {selectedBilling?.billing_number}</Title>
      <TopBillingDetails {...selectedBilling} />
      <ProductBillingDetails
        products={products}
        indexedProducts={indexedProducts}
      />
      <BottomBillingDetails {...selectedBilling} />
      <Toaster richColors />
    </Card>
  );
};

export default BillingDetailsPage;
