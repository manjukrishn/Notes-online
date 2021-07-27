import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function MediaControlCard() {
  return (
    <Button
      size="small"
      disableElevation={true}
      variant="contained"
      color="grey"
      style={{marginTop:"10px",borderRadius:"20px"}}
    >
      Data Structures
    </Button>
  );
}
