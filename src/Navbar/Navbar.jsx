import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MoreVertIcon from "@material-ui/icons/Menu";

export default function Nav() {
  return (
    <div>
      <div>
        <MoreVertIcon
          id="more"
          style={{ position: "absolute" }}
          onClick={() => {
            if (document.getElementById("navbar").style.width === "75px") {
              document.getElementById("navbar").style.width = "0px";
              document.getElementById("more").style.position = "absolute";
              // document.getElementById("main").style.position = "absolute";
            } else {
              document.getElementById("navbar").style.width = "75px";
              document.getElementById("more").style.position = "fixed";
              document.getElementById("more").style.marginTop = "30px";
              // document.getElementById("main").style.position = "fixed";
            }
          }}
        />
      </div>
      <div style={{ position: "fixed" }}>
        <Sidebar />
      </div>
      <div style={{ position: "absolute" }}>
        <Topbar />
      </div>
    </div>
  );
}
