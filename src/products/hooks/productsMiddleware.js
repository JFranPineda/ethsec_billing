import { actionAppHandler } from "../../hooks/actionMiddleware.js";
import {
  getProductById,
  handleCreateProduct,
  handleDeleteProduct,
  handleFetchProducts,
  handleUpdateProduct,
} from "./productsUtils.js";

export const syncProductWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    const previousState = store.getState();
    next(action);
    const actionProductsHandlers = {
      "products/deleteProduct": () => {
        const productIdToRemove = payload || meta?.arg;
        const productToRemove = getProductById({
          previousState,
          productId: productIdToRemove,
        });
        handleDeleteProduct({ store, type, productToRemove });
      },
      "products/createProduct": () => {
        const product = payload || meta?.arg;
        handleCreateProduct({ type, product });
      },
      "products/fetchProducts": () => {
        handleFetchProducts(type);
      },
      "products/updateProduct": () => {
        const updatedProduct = payload || meta?.arg;
        handleUpdateProduct({ type, updatedProduct });
      },
    };
    actionAppHandler({ actionHandlers: actionProductsHandlers, type });
  };
