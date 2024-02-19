import { Select, SelectItem } from "@tremor/react";
import { useAppSelector } from "../../../hooks/appStore.js";
import { useBillingActions } from "../../hooks/billingsHooks.js";

const SellersList = ({ sellers = [] }) => {
  const selectedBilling = useAppSelector(
    (state) => state.billingsReducer.selectedBilling
  );
  const { _id = null, seller_id = null } = selectedBilling;
  const { modifyBilling } = useBillingActions();

  const handleSelectChange = (sellerId) => {
    const selectedSeller = sellers.find((seller) => seller._id === sellerId);
    if (selectedSeller) {
      modifyBilling({
        _id,
        seller_id: sellerId,
        seller_name: `${selectedSeller.first_name} ${selectedSeller.last_name}`,
      });
    }
  };

  return (
    <Select
      value={seller_id}
      placeholder="Selecciona un vendedor"
      onValueChange={(sellerId) => handleSelectChange(sellerId)}
    >
      {sellers.map((seller) => (
        <SelectItem key={seller._id} value={seller._id}>
          {seller.first_name} {seller.last_name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SellersList;
