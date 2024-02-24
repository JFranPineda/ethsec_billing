import { useAppDispatch } from "../../hooks/appStore.js";
import {
  addProduct,
  createBilling,
  deleteBilling,
  deleteProduct,
  fetchBillings,
  generateBillingPdf,
  getBillingById,
  modifyProductQuantity,
  updateBilling,
  updateMoneyType,
  updateWithIgv,
} from "../actions/billingsActions.js";
import {
  clearBilling,
  clearBillingPdf,
  clearProduct,
  selectBilling,
  selectProduct,
} from "../reducers/billingsSlice.js";

export const useBillingActions = () => {
  const dispatch = useAppDispatch();

  const getAllBillings = () => {
    dispatch(fetchBillings());
  };

  const getBillingWithId = (billingId) => {
    dispatch(getBillingById(billingId));
  };

  const editBilling = (billingId) => {
    dispatch(selectBilling(billingId));
  };

  const generatePdf = (billingId) => {
    dispatch(generateBillingPdf(billingId));
  };

  const addBilling = (newBilling) => {
    dispatch(createBilling(newBilling));
  };

  const modifyBilling = (updatedBilling) => {
    dispatch(updateBilling({ ...updatedBilling }));
  };

  const removeBilling = (billingId) => {
    dispatch(deleteBilling(billingId));
  };

  const modifyWithIgv = (updatedBilling) => {
    dispatch(updateWithIgv({ ...updatedBilling }));
  };

  const modifyMoneyType = (updatedBilling) => {
    dispatch(updateMoneyType({ ...updatedBilling }));
  };

  const selectBillingProduct = (product) => {
    dispatch(selectProduct(product));
  };

  const addBillingProduct = (updatedBilling) => {
    dispatch(addProduct({ ...updatedBilling }));
  };

  const editBillingProductQuantity = (updatedBilling) => {
    dispatch(modifyProductQuantity({ ...updatedBilling }));
  };

  const deleteBillingProduct = (updatedBilling) => {
    dispatch(deleteProduct({ ...updatedBilling }));
  };

  const clearBillingProduct = () => {
    dispatch(clearProduct());
  };

  const clearCurrentBilling = () => {
    dispatch(clearBilling());
  };

  const clearCurrentPdf = () => {
    dispatch(clearBillingPdf());
  };

  return {
    getAllBillings,
    getBillingWithId,
    generatePdf,
    addBilling,
    modifyBilling,
    removeBilling,
    editBilling,
    modifyWithIgv,
    modifyMoneyType,
    selectBillingProduct,
    addBillingProduct,
    editBillingProductQuantity,
    deleteBillingProduct,
    clearCurrentPdf,
    clearCurrentBilling,
    clearBillingProduct,
  };
};
