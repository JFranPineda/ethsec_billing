import { Card, Col, Grid, Title } from "@tremor/react";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { useClientActions } from "../../clients/hooks/clientsHooks.js";
import { useAppSelector } from "../../hooks/appStore.js";
import { useMoneyCatalogActions } from "../../money_catalog/hooks/moneyCatalogHooks.js";
import { useProductActions } from "../../products/hooks/productsHooks.js";
import { useSellerActions } from "../../sellers/hooks/sellersHooks.js";
import ClientSelector from "../components/clients/ClientSelector.js";
import IgvSelector from "../components/igv/IgvSelector.js";
import MoneySelector from "../components/money_catalog/MoneySelector.js";
import ProductSelector from "../components/products/ProductSelector.js";
import ProductsTable from "../components/products/ProductsTable.js";
import SellerSelector from "../components/sellers/SellerSelector.js";
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
  const {
    client_id = null,
    seller_id = null,
    money_type = null,
    billing_number,
    expiration_time = 0,
    notes,
    before_taxes_amount,
    igv_amount,
    total_amount,
  } = selectedBilling;
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
      <Title>COTIZACIÓN N° {billing_number}</Title>
      <Title>DÍAS DE VALIDEZ: {expiration_time} días</Title>
      <Grid numItems={12}>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <ClientSelector client_id={client_id} />
        </Col>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <SellerSelector seller_id={seller_id} />
        </Col>
      </Grid>
      <Grid numItems={12}>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <MoneySelector money_type={money_type} />
        </Col>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <IgvSelector />
        </Col>
      </Grid>
      <Grid numItems={12}>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <ProductSelector
            products={products}
            indexedProducts={indexedProducts}
          />
        </Col>
        <Col numColSpan={12} className="mt-6">
          <ProductsTable />
        </Col>
      </Grid>
      <Grid numItems={12}>
        <Col numColSpan={6} />
        <Col numColSpan={4} className="mt-6">
          <Title>NOTAS: {notes}</Title>
          <Title>SUBTOTAL: {before_taxes_amount}</Title>
          <Title>IGV: {igv_amount}</Title>
          <Title>TOTAL: {total_amount}</Title>
        </Col>
      </Grid>
      <Toaster richColors />
    </Card>
  );
};

export default BillingDetailsPage;
