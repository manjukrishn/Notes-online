import React from "react";
import Logo from "./LogoComplete";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { isLogin } from "../utils";
import "./Topbar.css";

export default function Topbar(props) {
  const changedSearch = (item) => {
    props.change(item);
  };
  return (
    <div id="main">
      <div className="topbar">
        <div style={{ marginLeft: "30px" }}>
          <SearchBar change={changedSearch} />
        </div>
        {isLogin() ? (
          <div className="sign-in">
            <SignOut />
          </div>
        ) : (
          <div className="sign-in">
            <SignIn />
          </div>
        )}
      </div>
    </div>
  );
}
