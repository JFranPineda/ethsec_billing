import { toast } from "sonner";
import { rollbackSeller } from "../reducers/sellersSlice.js";

export const syncSellerDeleteWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    console.log("action seller middleware: ", action);
    const previousState = store.getState();
    next(action);

    const prm = payload ? payload : meta?.arg;

    if (type.includes("sellers/deleteSeller")) {
      const sellerIdToRemove = prm;
      const sellerToRemove = previousState?.sellersReducer?.sellers.find(
        (seller) => seller._id === sellerIdToRemove
      );
      if (type.endsWith("/fulfilled")) {
        toast.success(
          `Vendedor ${sellerToRemove.last_name} eliminado correctamente`
        );
      }
      if (type.endsWith("/rejected")) {
        toast.error(
          `Error deleting seller ${sellerToRemove.last_name} - ${sellerIdToRemove}`
        );
        if (sellerToRemove) store.dispatch(rollbackSeller(sellerToRemove));
      }
    }

    if (type.includes("sellers/createSeller")) {
      const seller = prm;
      if (type.endsWith("/fulfilled")) {
        toast.success(`Vendedor ${seller.last_name} creado correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error creating seller ${seller.last_name}`);
      }
    }

    if (type.includes("sellers/fetchSellers")) {
      if (type.endsWith("/fulfilled")) {
        toast.success(`Lista de vendedores obtenida correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error getting sellers list`);
      }
    }

    if (type.includes("sellers/updateSeller")) {
      const updatedSeller = prm;
      if (type.endsWith("/fulfilled")) {
        toast.success(
          `Vendedor ${updatedSeller._id} actualizado correctamente`
        );
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error updating seller ${updatedSeller.last_name}`);
      }
    }
  };
