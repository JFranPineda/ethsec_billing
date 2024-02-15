import { Select, SelectItem } from "@tremor/react";
import { useAppSelector } from "../../../hooks/appStore.js";
import { useBillingActions } from "../../hooks/billingsHooks.js";

const MoniesList = ({ monies = [] }) => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const { _id = null, money_type = null } = selectedBilling;
  const { modifyMoneyType } = useBillingActions();

  const handleSelectChange = (moneyType) => {
    modifyMoneyType({
      _id,
      money_type: moneyType,
    });
  };

  return (
    <Select
      value={money_type}
      onValueChange={(moneyType) => handleSelectChange(moneyType)}
    >
      <SelectItem value="">Selecciona una moneda</SelectItem>
      {monies.map((money) => (
        <SelectItem key={money._id} value={money.currency}>
          {money.currency}
        </SelectItem>
      ))}
    </Select>
  );
};

export default MoniesList;
