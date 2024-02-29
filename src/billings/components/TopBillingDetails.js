import React, { useEffect, useState } from "react";
// import { useAppSelector } from "../hooks/appStore.js";
import { Col, Grid, TextInput, Title } from "@tremor/react";
import ClientSelector from "../components/clients/ClientSelector.js";
import IgvSelector from "../components/igv/IgvSelector.js";
import MoneySelector from "../components/money_catalog/MoneySelector.js";
import SellerSelector from "../components/sellers/SellerSelector.js";
import { useBillingActions } from "../hooks/billingsHooks.js";

const TopBillingDetails = ({
  _id,
  expiration_time = null,
  client_id = null,
  seller_id = null,
  money_type = null,
}) => {
  const { modifyBilling } = useBillingActions();
  const [currentDays, setCurrentDays] = useState(15);

  useEffect(() => {
    setCurrentDays(expiration_time);
  }, [expiration_time]);

  const handleBlurDays = () => {
    if (_id) {
      const editObj = {
        _id,
        expiration_time: +currentDays,
      };
      modifyBilling({ ...editObj });
    }
  };

  return (
    <>
      <Grid numItems={12}>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <Title>DÍAS DE VALIDEZ (días):</Title>
          <TextInput
            value={currentDays}
            placeholder="Ingrese días de validez"
            onChange={(e) => setCurrentDays(e.target.value)}
            onBlur={() => handleBlurDays()}
          />
        </Col>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <IgvSelector />
        </Col>
      </Grid>
      <Grid numItems={12}>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <ClientSelector client_id={client_id} />
        </Col>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <SellerSelector seller_id={seller_id} />
        </Col>
      </Grid>
      <Grid numItems={12}>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <MoneySelector money_type={money_type} />
        </Col>
      </Grid>
    </>
  );
};

export default TopBillingDetails;
