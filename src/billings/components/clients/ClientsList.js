import { Select, SelectItem } from "@tremor/react";
import { useAppSelector } from "../../../hooks/appStore.js";
import { useBillingActions } from "../../hooks/billingsHooks.js";

const ClientsList = ({ clients = [] }) => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const { _id = null, client_id = null } = selectedBilling;
  const { modifyBilling } = useBillingActions();

  const handleSelectChange = (clientId) => {
    const selectedClient = clients.find((client) => client._id === clientId);
    if (selectedClient) {
      modifyBilling({
        _id,
        client_id: clientId,
        company_name: selectedClient.company_name,
      });
    }
  };

  return (
    <Select
      value={client_id}
      onValueChange={(clientId) => handleSelectChange(clientId)}
    >
      <SelectItem value="">Selecciona un cliente</SelectItem>
      {clients.map((client) => (
        <SelectItem key={client._id} value={client._id}>
          {client.company_name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default ClientsList;
