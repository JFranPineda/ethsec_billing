import { useAppDispatch } from "../../hooks/appStore.js";
import {
  createMoney,
  deleteMoney,
  fetchMonies,
  getMoneyById,
  updateMoney,
} from "../actions/moneyCatalogActions.js";
import { clearMoney, selectMoney } from "../reducers/moneyCatalogSlice.js";

export const useMoneyCatalogActions = () => {
  const dispatch = useAppDispatch();

  const getAllMonies = () => {
    dispatch(fetchMonies());
  };

  const getMoneyWithId = (moneyId) => {
    dispatch(getMoneyById(moneyId));
  };

  const editMoney = (moneyId) => {
    dispatch(selectMoney(moneyId));
  };

  const clearCurrentMoney = () => {
    dispatch(clearMoney());
  };

  const addMoney = (newMoney) => {
    dispatch(createMoney(newMoney));
  };

  const modifyMoney = (updatedMoney) => {
    dispatch(updateMoney({ ...updatedMoney }));
  };

  const removeMoney = (moneyId) => {
    dispatch(deleteMoney(moneyId));
  };

  return {
    getAllMonies,
    getMoneyWithId,
    addMoney,
    modifyMoney,
    removeMoney,
    editMoney,
    clearCurrentMoney,
  };
};
