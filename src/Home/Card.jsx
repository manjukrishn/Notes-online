import React from "react";
import Pdf from "./Pdf";
import CardContent from "./CardContent";
import Card from "@material-ui/core/Card";
import "./Card.css";
import { useHistory } from "react-router-dom";

export default function CardComplete(props) {
  const [clicked, setClicked] = React.useState(false);
  const history = useHistory();

  return (
    <Card
      raised={false}
      elevation={0}
      style={{ zIndex: "-1" }}
      onClick={() => {
        localStorage.setItem("url", props.item.file);
        history.push("notes");
      }}
    >
      <div
        className="pdf-container"
        style={{ overflow: "auto", overflowX: "hidden" }}
      >
        <div style={{ zIndex: "-2", height: "190px" }}>
          <Pdf url={props.item.file} />
        </div>
      </div>
      <CardContent
        name={props.item.name}
        sem={props.item.sem}
        user={props.item.user}
        branch={props.item.branch}
        date={props.item.date}
      />
    </Card>
  );
}
