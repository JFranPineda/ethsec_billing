import { toast } from "sonner";
import { rollbackProduct } from "../reducers/productsSlice.js";

export const syncProductDeleteWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    console.log("action product middleware: ", action);
    const previousState = store.getState();
    next(action);

    const prm = payload ? payload : meta?.arg;

    if (type.includes("products/deleteProducts")) {
      const productIdToRemove = prm;
      const productToRemove = previousState?.productsReducer?.products.find(
        (product) => product._id === productIdToRemove
      );
      if (type.endsWith("/fulfilled")) {
        toast.success(
          `Producto ${productToRemove.model} eliminado correctamente`
        );
      }
      if (type.endsWith("/rejected")) {
        toast.error(
          `Error deleting product ${productToRemove.model} - ${productIdToRemove}`
        );
        if (productToRemove) store.dispatch(rollbackProduct(productToRemove));
      }
    }

    if (type.includes("products/createProduct")) {
      const product = prm;
      if (type.endsWith("/fulfilled")) {
        toast.success(`Producto ${product.model} creado correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error creating product ${product.model}`);
      }
    }

    if (type.includes("products/fetchProducts")) {
      if (type.endsWith("/fulfilled")) {
        toast.success(`Lista de productos obtenida correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error getting products list`);
      }
    }

    if (type.includes("products/updateProduct")) {
      const updatedProduct = prm;
      if (type.endsWith("/fulfilled")) {
        toast.success(
          `Producto ${updatedProduct.id} actualizado correctamente`
        );
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error updating product ${updatedProduct.model}`);
      }
    }
  };
