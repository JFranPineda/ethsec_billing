import { toast } from "sonner";
import { rollbackMoney } from "../reducers/moneyCatalogSlice.js";

export const getMoneyById = ({ previousState, moneyId }) =>
  previousState?.moniesReducer?.monies.find((money) => money._id === moneyId);

export const handleDeleteMoney = ({ store, type, moneyToRemove }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Moneda ${moneyToRemove.currency} eliminada correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(
      `Error deleting money ${moneyToRemove.currency} - ${moneyToRemove._id}`
    );
    if (moneyToRemove) store.dispatch(rollbackMoney(moneyToRemove));
  }
};

export const handleCreateMoney = ({ type, money }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Moneda ${money.currency} creada correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error creating money ${money.currency}`);
  }
};

export const handleFetchMonies = (type) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Lista de monedas obtenida correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error getting money catalog list`);
  }
};

export const handleUpdateMoney = ({ type, updatedMoney }) => {
  if (type.endsWith("/fulfilled")) {
    toast.success(`Moneda ${updatedMoney._id} actualizada correctamente`);
  }
  if (type.endsWith("/rejected")) {
    toast.error(`Error updating money ${updatedMoney.currency}`);
  }
};
