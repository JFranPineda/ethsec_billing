import { actionAppHandler } from "../../hooks/actionMiddleware.js";
import {
  getSellerById,
  handleCreateSeller,
  handleDeleteSeller,
  handleFetchSellers,
  handleUpdateSeller,
} from "./sellersUtils.js";

export const syncSellerWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    const previousState = store.getState();
    next(action);
    const actionSellersHandlers = {
      "sellers/deleteSeller": () => {
        const sellerIdToRemove = payload || meta?.arg;
        const sellerToRemove = getSellerById({
          previousState,
          sellerId: sellerIdToRemove,
        });
        handleDeleteSeller({ store, type, sellerToRemove });
      },
      "sellers/createSeller": () => {
        const seller = payload || meta?.arg;
        handleCreateSeller({ type, seller });
      },
      "sellers/fetchSellers": () => {
        handleFetchSellers(type);
      },
      "sellers/updateSeller": () => {
        const updatedSeller = payload || meta?.arg;
        handleUpdateSeller({ type, updatedSeller });
      },
    };
    actionAppHandler({ actionHandlers: actionSellersHandlers, type });
  };
