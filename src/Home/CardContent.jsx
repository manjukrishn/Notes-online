import React from "react";
import Avatar from "./CardAvatar";

import CardHeader from "@material-ui/core/CardHeader";
export default function CardContentComplete(props) {
  var date = new Date(parseInt(props.date, 10));
  var dateToStr = date.toUTCString().split(" ");
  var cleanDate = dateToStr[2] + " " + dateToStr[1] + ", " + dateToStr[3];
  return (
    <CardHeader
      style={{ background: "#E0E0E0" }}
      title={<h3 style={{ fontFamily: "aria" }}>{props.name}</h3>}
      subheader={
        <ul style={{ listStyle: "none", marginTop: "10px" }}>
          <li style={{ fontWeight: "550" }}>{props.user}</li>
          <li
            style={{
              fontSize: "12px",
              marginTop: "5px",
              marginBottom: "-15px"
            }}
          >
            {props.branch}
          </li>
          <li style={{ display: "inline", fontSize: "12px" }}>Semester 3 </li>
          <li style={{ display: "inline", fontSize: "12px" }}>
            <h1
              style={{
                display: "inline-block",
                margin: "0 2px",
                transform: "scale(0.75)"
              }}
            >
              .
            </h1>
            {cleanDate}
          </li>
        </ul>
      }
    />
  );
}
