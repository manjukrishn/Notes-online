import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Profile(props) {
  function handleChange() {
    return;
  }

  return (
    <TextField
      label={props.label}
      value={props.value}
      onChange={handleChange}
      variant="filled"
      disabled
      style={{marginTop:"15px"}}
    />
  );
}
