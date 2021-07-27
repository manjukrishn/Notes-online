import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { pdfjs } from "react-pdf";
import Loading from "./Loading/LoadingHourGlass";
import { useHistory } from "react-router-dom";

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  const history = useHistory();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const getUrl = localStorage.getItem("url");

  if (getUrl === undefined || getUrl == null) return <Loading />;
  const url = "https://tranquil-garden-51974.herokuapp.com/" + getUrl;

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <div>
      <ArrowBackIcon
        onClick={() => history.push("/home")}
        style={{
          marginTop: "15px",
          marginBottom: "40px",
          marginLeft: "30px",
          cursor: "pointer"
        }}
      />
      <Document
        file={url}
        loading={
          <div style={{ marginLeft: "45%" }}>
            <Loading />
          </div>
        }
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div style={{ width: "100%", overflowX: "scroll" }}>
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              loading={<div> </div>}
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
