import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function Sigin() {
  const history = useHistory();
  return (
    <div>
      <Button
        onClick={() => {
          localStorage.setItem("logged", false);
          localStorage.setItem("uid", "");
          setTimeout(history.push("/login"),2000);
        }}
        variant="outlined"
        size="small"
        color="primary"
      >
        Log Out
      </Button>
    </div>
  );
}
