import { Select, SelectItem } from "@tremor/react";
import { useAppSelector } from "../../../hooks/appStore.js";
import { useBillingActions } from "../../hooks/billingsHooks.js";

const ProductsList = ({ products, indexedProducts = {} }) => {
  const selectedBillingProduct = useAppSelector(
    (state) => state.billingsReducer.selectedBillingProduct
  );
  const { _id } = selectedBillingProduct;
  const { selectBillingProduct } = useBillingActions();

  const handleSelectChange = (productId) => {
    if (indexedProducts[productId]) {
      selectBillingProduct(indexedProducts[productId]);
    }
  };

  return (
    <Select
      value={_id}
      onValueChange={(productId) => handleSelectChange(productId)}
    >
      <SelectItem value="">Selecciona un producto</SelectItem>
      {products.map((product) => (
        <SelectItem key={product._id} value={product._id}>
          {product.model}
        </SelectItem>
      ))}
    </Select>
  );
};

export default ProductsList;
