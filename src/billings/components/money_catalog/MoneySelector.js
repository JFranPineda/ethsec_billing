import React from "react";
import { useAppSelector } from "../../../hooks/appStore.js";
import MoneyDetails from "./MoneyDetails.js";
import MoniesList from "./MoniesList.js";

const MoneySelector = ({ money_type }) => {
  const monies = useAppSelector((state) => state.moniesReducer.monies);
  const selectedMoney = monies.find((money) => money.currency === money_type);

  return (
    <div>
      <MoniesList monies={monies} />
      {selectedMoney && <MoneyDetails {...selectedMoney} />}
    </div>
  );
};

export default MoneySelector;
