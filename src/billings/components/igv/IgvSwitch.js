import { Switch } from "@tremor/react";
import { useAppSelector } from "../../../hooks/appStore.js";
import { useBillingActions } from "../../hooks/billingsHooks.js";

const IgvSwitch = () => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  console.log("selectedBilling: ", selectedBilling);
  const { _id = null, with_igv = null } = selectedBilling;
  console.log("with_igv: ", typeof with_igv);
  const { modifyWithIgv } = useBillingActions();

  const handleSwitchChange = () => {
    modifyWithIgv({
      _id,
      with_igv: !with_igv,
    });
  };

  return (
    <div className="flex items-center space-x-3">
      <Switch
        id="switch"
        name="switch"
        color="cyan"
        checked={with_igv}
        onChange={() => handleSwitchChange()}
      />
      <label
        htmlFor="switch"
        className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
      >
        <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {with_igv ? "Incluido IGV" : "No Incluido IGV"}
        </span>
      </label>
    </div>
  );
};

export default IgvSwitch;
