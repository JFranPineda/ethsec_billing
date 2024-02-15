import { toast } from "sonner";
import { rollbackProduct } from "../reducers/productsSlice.js";

export const getProductById = ({ previousState, productId }) =>
  previousState?.productsReducer?.products.find(
    (product) => product._id === productId
  );

export const handleDeleteProduct = ({ store, type, productToRemove }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Producto ${productToRemove.model} eliminado correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(
      `Error deleting product ${productToRemove.model} - ${productToRemove._id}`
    );
    if (productToRemove) store.dispatch(rollbackProduct(productToRemove));
  }
};

export const handleCreateProduct = ({ type, product }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Producto ${product.model} creado correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error creating product ${product.model}`);
  }
};

export const handleFetchProducts = (type) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Lista de productos obtenida correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error getting products list`);
  }
};

export const handleUpdateProduct = ({ type, updatedProduct }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Producto ${updatedProduct._id} actualizado correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error updating product ${updatedProduct.model}`);
  }
};
