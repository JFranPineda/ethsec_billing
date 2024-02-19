import { Col, Grid, Textarea, Title } from "@tremor/react";
import React, { useEffect, useState } from "react";
import { useBillingActions } from "../hooks/billingsHooks.js";

const BottomBillingDetails = ({
  _id,
  notes = "",
  before_taxes_amount = 0,
  igv_amount = 0,
  total_amount = 0,
}) => {
  const { modifyBilling } = useBillingActions();
  const [currentNotes, setCurrentNotes] = useState("");

  useEffect(() => {
    setCurrentNotes(notes);
  }, []);

  const handleBlurNotes = () => {
    if (_id) {
      const editObj = {
        _id,
        notes: currentNotes,
      };
      modifyBilling({ ...editObj });
    }
  };

  return (
    <>
      <Grid numItems={12}>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <Title>Notas: </Title>
          <Textarea
            onChange={(e) => setCurrentNotes(e.target.value)}
            id="currentNotes"
            placeholder="Ingrese notas (opcional)"
            rows={6}
            value={currentNotes}
            onBlur={() => handleBlurNotes()}
          />
        </Col>
        <Col numColSpan={1} />
        <Col numColSpan={4} className="mt-6">
          <Title>SUBTOTAL: {before_taxes_amount}</Title>
          <Title>IGV: {igv_amount}</Title>
          <Title>TOTAL: {total_amount}</Title>
        </Col>
      </Grid>
    </>
  );
};

export default BottomBillingDetails;
