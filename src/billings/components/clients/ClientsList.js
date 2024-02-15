import { useAppSelector } from "../../../hooks/appStore.js";
import { useBillingActions } from "../../hooks/billingsHooks.js";

const ClientsList = ({ clients = [] }) => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const { _id = null, client_id = null } = selectedBilling;
  const { modifyBilling } = useBillingActions();

  const handleSelectChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOptionText = e.target.options[selectedIndex].text;
    const clientId = e.target.value;
    modifyBilling({
      _id,
      client_id: clientId,
      company_name: selectedOptionText,
    });
  };

  return (
    <select value={client_id} onChange={(e) => handleSelectChange(e)}>
      <option value="">Selecciona un cliente</option>
      {clients.map((client) => (
        <option key={client._id} value={client._id} name={client.company_name}>
          {client.company_name}
        </option>
      ))}
    </select>
  );
};

export default ClientsList;
