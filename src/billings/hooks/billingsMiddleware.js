import { actionAppHandler } from "../../hooks/actionMiddleware.js";
import {
  getBillingById,
  handleAddProduct,
  handleCreateBilling,
  handleDeleteBilling,
  handleDeleteProduct,
  handleFetchBillings,
  handleModifyProductQuantity,
  handleUpdateBilling,
  handleUpdateMoneyType,
  handleUpdateWithIgv,
} from "./billingsUtils.js";

export const syncBillingWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    const previousState = store.getState();
    next(action);
    const actionBillingsHandlers = {
      "billings/deleteBilling": () => {
        const billingIdToRemove = payload || meta?.arg;
        const billingToRemove = getBillingById({
          previousState,
          billingId: billingIdToRemove,
        });
        handleDeleteBilling({ store, type, billingToRemove });
      },
      "billings/createBilling": () => {
        const billing = payload || meta?.arg;
        handleCreateBilling({ type, billing });
      },
      "billings/fetchBillings": () => {
        handleFetchBillings(type);
      },
      "billings/updateBilling": () => {
        const updatedBilling = payload || meta?.arg;
        handleUpdateBilling({ type, updatedBilling });
      },
      "billings/updateWithIgv": () => {
        const updatedBilling = payload || meta?.arg;
        handleUpdateWithIgv({ type, updatedBilling });
      },
      "billings/updateMoneyType": () => {
        const updatedBilling = payload || meta?.arg;
        handleUpdateMoneyType({ type, updatedBilling });
      },
      "billings/addProduct": () => {
        const updatedBilling = meta?.arg || payload;
        handleAddProduct({ type, updatedBilling });
      },
      "billings/modifyProductQuantity": () => {
        const updatedBilling = meta?.arg || payload;
        handleModifyProductQuantity({ type, updatedBilling });
      },
      "billings/deleteProduct": () => {
        const updatedBilling = meta?.arg || payload;
        handleDeleteProduct({ type, updatedBilling });
      },
    };
    actionAppHandler({ actionHandlers: actionBillingsHandlers, type });
  };
