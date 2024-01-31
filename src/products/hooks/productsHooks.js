import { useAppDispatch } from "../../hooks/appStore.js";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  getProductById,
  updateProduct,
} from "../actions/productsActions.js";

export const useProductActions = () => {
  const dispatch = useAppDispatch();

  const getAllProducts = () => {
    dispatch(fetchProducts());
  };

  const getProductWithId = (productId) => {
    dispatch(getProductById(productId));
  };

  const addProduct = (newProduct) => {
    dispatch(createProduct(newProduct));
  };

  const modifyProduct = (productId, updatedProduct) => {
    dispatch(updateProduct({ id: productId, ...updatedProduct }));
  };

  const removeProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return {
    getAllProducts,
    getProductWithId,
    addProduct,
    modifyProduct,
    removeProduct,
  };
};
