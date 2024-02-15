import { actionAppHandler } from "../../hooks/actionMiddleware.js";
import {
  getMoneyById,
  handleCreateMoney,
  handleDeleteMoney,
  handleFetchMonies,
  handleUpdateMoney,
} from "./moneyCatalogUtils.js";

export const syncMoneyCatalogWithDatabaseMiddleware =
  (store) => (next) => (action) => {
    const { type, meta, payload } = action;
    const previousState = store.getState();
    next(action);
    const actionMoneyHandlers = {
      "money_catalog/deleteMoney": () => {
        const moneyIdToRemove = payload || meta?.arg;
        const moneyToRemove = getMoneyById({
          previousState,
          moneyId: moneyIdToRemove,
        });
        handleDeleteMoney({ store, type, moneyToRemove });
      },
      "money_catalog/createMoney": () => {
        const money = payload || meta?.arg;
        handleCreateMoney({ type, money });
      },
      "money_catalog/fetchMonies": () => {
        handleFetchMonies(type);
      },
      "money_catalog/updateMoney": () => {
        const updatedMoney = payload || meta?.arg;
        handleUpdateMoney({ type, updatedMoney });
      },
    };
    actionAppHandler({ actionHandlers: actionMoneyHandlers, type });
  };
