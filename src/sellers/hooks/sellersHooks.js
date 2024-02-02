import { useAppDispatch } from "../../hooks/appStore.js";
import {
  createSeller,
  deleteSeller,
  fetchSellers,
  getSellerById,
  updateSeller,
} from "../actions/sellersActions.js";
import { clearSeller, selectSeller } from "../reducers/sellersSlice.js";

export const useSellerActions = () => {
  const dispatch = useAppDispatch();

  const getAllSellers = () => {
    dispatch(fetchSellers());
  };

  const getSellerWithId = (sellerId) => {
    dispatch(getSellerById(sellerId));
  };

  const editSeller = (sellerId) => {
    dispatch(selectSeller(sellerId));
  };

  const clearCurrentSeller = () => {
    dispatch(clearSeller());
  };

  const addSeller = (newSeller) => {
    dispatch(createSeller(newSeller));
  };

  const modifySeller = (updatedSeller) => {
    dispatch(updateSeller({ ...updatedSeller }));
  };

  const removeSeller = (sellerId) => {
    dispatch(deleteSeller(sellerId));
  };

  return {
    getAllSellers,
    getSellerWithId,
    addSeller,
    modifySeller,
    removeSeller,
    editSeller,
    clearCurrentSeller,
  };
};
