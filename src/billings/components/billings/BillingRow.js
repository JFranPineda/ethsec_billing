import {
  PencilSquareIcon,
  PrinterIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Icon, TableCell, TableRow } from "@tremor/react";
import React from "react";
import { useAppNavigate } from "../../../hooks/appNavigation.js";
import { useBillingActions } from "../../hooks/billingsHooks.js";

const BillingRow = ({
  billing_number,
  _id, //item,
  company_name,
  seller_name,
  money_type,
  before_taxes_amount,
  igv_amount,
  total_amount,
  expiration_time,
  products,
}) => {
  const navigate = useAppNavigate();
  const handleEditBilling = () => {
    navigate(`/billings/modify/${_id}`);
  };
  const { removeBilling, generatePdf } = useBillingActions();
  const productsModels = products?.map((product) => product.model).join(", ");
  return (
    <TableRow key={_id} id={_id}>
      <TableCell>{billing_number}</TableCell>
      <TableCell>{company_name}</TableCell>
      <TableCell>{seller_name}</TableCell>
      <TableCell>{money_type}</TableCell>
      <TableCell>{before_taxes_amount}</TableCell>
      <TableCell>{igv_amount}</TableCell>
      <TableCell>{total_amount}</TableCell>
      <TableCell>{expiration_time}</TableCell>
      <TableCell>{productsModels}</TableCell>
      <TableCell>
        <Icon
          onClick={() => handleEditBilling()}
          icon={PencilSquareIcon}
          variant="simple"
          tooltip="Edit Billing"
        />
        <Icon
          onClick={() => removeBilling(_id)}
          icon={TrashIcon}
          variant="simple"
          tooltip="Remove Billing"
        />
        <Icon
          onClick={() => generatePdf(_id)}
          icon={PrinterIcon}
          variant="simple"
          tooltip="Print Billing PDF"
        />
      </TableCell>
    </TableRow>
  );
};

export default BillingRow;
