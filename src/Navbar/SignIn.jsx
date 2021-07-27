import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function Sigin() {
  const history = useHistory();
  return (
    <div>
      <Button
        onClick={() => {
          history.push("/login");
        }}
        variant="outlined"
        size="small"
        color="primary"
      >
        Log In
      </Button>
    </div>
  );
}
