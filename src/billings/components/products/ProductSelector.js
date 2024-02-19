import { Button } from "@tremor/react";
import React from "react";
import { useAppSelector } from "../../../hooks/appStore.js";
import { useBillingActions } from "../../hooks/billingsHooks.js";
import ProductDetails from "./ProductDetails.js";
import ProductsList from "./ProductsList.js";

const ProductSelector = ({ products, indexedProducts }) => {
  const selectedBillingProduct = useAppSelector(
    (state) => state.billingsReducer.selectedBillingProduct
  );
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const billingProducts = selectedBilling?.products || [];
  const { clearBillingProduct, addBillingProduct } = useBillingActions();

  const handleAddProduct = () => {
    if (selectedBilling._id && selectedBillingProduct._id) {
      const productObj = {
        _id: selectedBilling._id,
        product: {
          ...selectedBillingProduct,
          reserved_quantity: 1,
          item: billingProducts.length + 1,
        },
      };
      addBillingProduct(productObj);
      clearBillingProduct();
    }
  };

  return (
    <div>
      <ProductsList products={products} indexedProducts={indexedProducts} />
      {selectedBillingProduct && <ProductDetails {...selectedBillingProduct} />}
      <Button
        className="mt-2"
        disabled={!selectedBillingProduct._id}
        onClick={() => handleAddProduct()}
        tooltip="Agregar producto"
      >
        Añadir
      </Button>
    </div>
  );
};

export default ProductSelector;
