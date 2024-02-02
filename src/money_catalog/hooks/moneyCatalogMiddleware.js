import { toast } from "sonner";
import { rollbackMoney } from "../reducers/moneyCatalogSlice.js";

export const syncMoneyCatalogWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    console.log("action money_catalog middleware: ", action);
    const previousState = store.getState();
    next(action);

    const prm = payload ? payload : meta?.arg;

    if (type.includes("money_catalog/deleteMoney")) {
      const moneyIdToRemove = prm;
      const moneyToRemove = previousState?.moniesReducer?.monies.find(
        (money) => money._id === moneyIdToRemove
      );
      if (type.endsWith("/fulfilled")) {
        toast.success(
          `Moneda ${moneyToRemove.currency} eliminada correctamente`
        );
      }
      if (type.endsWith("/rejected")) {
        toast.error(
          `Error deleting money ${moneyToRemove.currency} - ${moneyIdToRemove}`
        );
        if (moneyToRemove) store.dispatch(rollbackMoney(moneyToRemove));
      }
    }

    if (type.includes("money_catalog/createMoney")) {
      const money = prm;
      if (type.endsWith("/fulfilled")) {
        toast.success(`Moneda ${money.currency} creada correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error creating money ${money.currency}`);
      }
    }

    if (type.includes("money_catalog/fetchMonies")) {
      if (type.endsWith("/fulfilled")) {
        toast.success(`Lista de monedas obtenida correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error getting money catalog list`);
      }
    }

    if (type.includes("money_catalog/updateMoney")) {
      const updatedMoney = prm;
      if (type.endsWith("/fulfilled")) {
        toast.success(`Moneda ${updatedMoney._id} actualizada correctamente`);
      }
      if (type.endsWith("/rejected")) {
        toast.error(`Error updating money ${updatedMoney.currency}`);
      }
    }
  };
