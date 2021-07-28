import React, { useState } from "react";
// import './loading.scss';
import { Document, Page, pdfjs } from "react-pdf";
import Loading from "../Loading/Loading";
export default function Test(props) {
  const url = "https://tranquil-garden-51974.herokuapp.com/" + props.url;

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  let currScale = 3;
  if (vw <= 250) currScale = 1.4;
  else if (vw <= 300) currScale = 1.8;
  else if (vw <= 350) currScale = 2.2;
  else if (vw <= 450) currScale = 2.5;
  else if (vw < 600) currScale = 4;
  function onDocumentLoadSuccess(ev) {
    setNumPages(ev.numPages);
    setPageNumber(1);
  }
  return (
    <>
      <div>
        <Document
          renderMode="svg"
          file={url}
          error={
            <div
              style={{
                marginLeft: "30%",
                positon: "absolute",
                marginTop: "5%"
              }}
            >
              Failed to load notes
            </div>
          }
          loading={
            <div style={{ marginLeft: "25%" }}>
              <Loading />
            </div>
          }
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => console.log(err.message)}
        >
          <Page
            height={180}
            loading={<div>" "</div>}
            pageNumber={pageNumber}
            scale={currScale}
          />
        </Document>
      </div>
    </>
  );
}
