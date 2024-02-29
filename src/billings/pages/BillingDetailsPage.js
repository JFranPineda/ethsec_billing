import { PrinterIcon } from "@heroicons/react/24/outline";
import { Card, Icon, Title } from "@tremor/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "sonner";
import { useClientActions } from "../../clients/hooks/clientsHooks.js";
import { useAppSelector } from "../../hooks/appStore.js";
import { useMoneyCatalogActions } from "../../money_catalog/hooks/moneyCatalogHooks.js";
import { useProductActions } from "../../products/hooks/productsHooks.js";
import { useSellerActions } from "../../sellers/hooks/sellersHooks.js";
import BottomBillingDetails from "../components/BottomBillingDetails.js";
import ProductBillingDetails from "../components/ProductBillingDetails.js";
import TopBillingDetails from "../components/TopBillingDetails.js";
import { useBillingActions } from "../hooks/billingsHooks.js";

const BillingDetailsPage = () => {
  const { billingId = null } = useParams();

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
  const {
    clearBillingProduct,
    clearCurrentPdf,
    generatePdf,
    getBillingWithId,
  } = useBillingActions();
  const { getAllMonies } = useMoneyCatalogActions();

  useEffect(() => {
    if (billingId) {
      getBillingWithId(billingId);
    }
    clearCurrentPdf();
    getAllClients();
    getAllSellers();
    getAllMonies();
    getAllProducts();
    clearBillingProduct();
  }, []);

  const handleCreatePdf = () => {
    if (selectedBilling._id) {
      generatePdf(selectedBilling._id);
    }
  };

  return (
    <Card>
      <Title>COTIZACIÓN N° {selectedBilling?.billing_number}</Title>
      <Icon
        onClick={() => handleCreatePdf()}
        icon={PrinterIcon}
        variant="simple"
        tooltip="Print Billing PDF"
      />
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
