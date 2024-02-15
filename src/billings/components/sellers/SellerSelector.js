import React from "react";
import { useAppSelector } from "../../../hooks/appStore.js";
import SellerDetails from "./SellerDetails.js";
import SellersList from "./SellersList.js";

const SellerSelector = ({ seller_id }) => {
  const sellers = useAppSelector((state) => state.sellersReducer.sellers);
  const selectedSeller = sellers.find((seller) => seller._id === seller_id);

  return (
    <div>
      <SellersList sellers={sellers} />
      {selectedSeller && <SellerDetails {...selectedSeller} />}
    </div>
  );
};

export default SellerSelector;
