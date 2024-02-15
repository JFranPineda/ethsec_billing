import { toast } from "sonner";
import { rollbackSeller } from "../reducers/sellersSlice.js";

export const getSellerById = ({ previousState, sellerId }) =>
  previousState?.sellersReducer?.sellers.find(
    (seller) => seller._id === sellerId
  );

export const handleDeleteSeller = ({ store, type, sellerToRemove }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(
      `Vendedor ${sellerToRemove.last_name} eliminado correctamente`
    );
  }
  if (type.endsWith("/rejected")) {
    toast.error(
      `Error deleting seller ${sellerToRemove.last_name} - ${sellerToRemove._id}`
    );
    if (sellerToRemove) store.dispatch(rollbackSeller(sellerToRemove));
  }
};

export const handleCreateSeller = ({ type, seller }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Vendedor ${seller.last_name} creado correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error creating seller ${seller.last_name}`);
  }
};

export const handleFetchSellers = (type) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Lista de vendedores obtenida correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error getting sellers list`);
  }
};

export const handleUpdateSeller = ({ type, updatedSeller }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Vendedor ${updatedSeller._id} actualizado correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error updating seller ${updatedSeller.last_name}`);
  }
};
