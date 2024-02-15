import { toast } from "sonner";
import { rollbackBilling } from "../reducers/billingsSlice.js";

export const getBillingById = ({ previousState, billingId }) =>
  previousState?.billingsReducer?.billings.find(
    (billing) => billing._id === billingId
  );

export const handleDeleteBilling = ({ store, type, billingToRemove }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(
      `Cotización número ${billingToRemove.billing_number} eliminada correctamente`
    );
  }
  if (type.endsWith("/rejected")) {
    toast.error(
      `Error deleting billing ${billingToRemove.billing_number} - ${billingToRemove._id}`
    );
    if (billingToRemove) store.dispatch(rollbackBilling(billingToRemove));
  }
};

export const handleCreateBilling = ({ type, billing }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(
      `Cotización número ${billing.billing_number} creada correctamente`
    );
  }
  if (type.endsWith("/rejected")) {
    toast.error("Error creating billing");
  }
};

export const handleFetchBillings = (type) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Lista de cotizaciones obtenida correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error getting billings list`);
  }
};

export const handleUpdateBilling = ({ type, updatedBilling }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Cotización ${updatedBilling._id} actualizada correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error updating billing ${updatedBilling.billing_number}`);
  }
};
