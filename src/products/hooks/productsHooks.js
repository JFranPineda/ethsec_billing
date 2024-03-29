import { useAppDispatch } from "../../hooks/appStore.js";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  getProductById,
  updateProduct,
} from "../actions/productsActions.js";
import { clearProduct, selectProduct } from "../reducers/productsSlice.js";

export const useProductActions = () => {
  const dispatch = useAppDispatch();

  const getAllProducts = () => {
    dispatch(fetchProducts());
  };

  const getProductWithId = (productId) => {
    dispatch(getProductById(productId));
  };

  const editProduct = (productId) => {
    dispatch(selectProduct(productId));
  };

  const clearCurrentProduct = () => {
    dispatch(clearProduct());
  };

  const addProduct = (newProduct) => {
    dispatch(createProduct(newProduct));
  };

  const modifyProduct = (updatedProduct) => {
    dispatch(updateProduct({ ...updatedProduct }));
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
    editProduct,
    clearCurrentProduct,
  };
};
