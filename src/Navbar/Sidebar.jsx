import React from "react";
import "./Sidebar.css";
import { useLocation } from "react-router-dom";
// import {isOutsider} from "./Util";
// import { Link } from "react-router-dom";import PersonIcon from '@material-ui/icons/Person';
import PersonIcon from "@material-ui/icons/Person";
import { isLogin } from "../utils";
import HomeIcon from "@material-ui/icons/Home";
import SignIn from "./SignIn";
import Logo from "./Logo";
import SignOut from "./SignOut";
import { useHistory } from "react-router-dom";
export default function Sidebar(props) {
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <div id="navbar">
        <ul>
          <li>
            <div
              onClick={() => {
                history.push("/home");
              }}
              id="Home"
            >
              <span className="icon">
                <HomeIcon />
              </span>
              <span className="title home">Home</span>
            </div>
          </li>
          {/* <li>
            <div
              onClick={() => {
                history.push("/subjects");
              }}
              id="Subjects"
            >
              <span className="icon">
                <PolymerIcon />
              </span>
              <span className="title department">Subjects</span>
            </div>
          </li> */}
          {location.pathname !== "/login" && (
            <li>
              <div
                onClick={() => {
                  history.push("/profile");
                }}
                id="Profile"
              >
                <span className="icon">
                  <PersonIcon />
                </span>
                <span className="title profile">Profile</span>
              </div>
            </li>
          )}
          {location.pathname !== "/login" ? (
            <li
              className="sign-in-button"
              style={{ marginLeft: "5px", marginTop: "15px" }}
            >
              <SignOut />
            </li>
          ) : (
            <li
              className="sign-in-button"
              style={{ marginLeft: "5px", marginTop: "15px" }}
            >
              <SignIn />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
