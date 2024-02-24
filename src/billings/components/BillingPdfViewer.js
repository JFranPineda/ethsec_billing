import React, { useEffect, useState } from "react";

const BillingPdfViewer = ({ pdfBase64 }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    setSrc(`data:application/pdf;base64,${pdfBase64}`);
  }, [pdfBase64]);

  return (
    <div>
      <iframe
        src={src}
        title="PDF Viewer"
        width="100%"
        height="500px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default BillingPdfViewer;
