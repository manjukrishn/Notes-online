import firebase from "firebase";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "./EntryGrid.css";
import Navbar from "../Navbar/Navbar";
import AddData from "./AddData";

export default function Ui() {
  const auth = firebase.auth();
  const history = useHistory();
  // history.push("/home");

  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  const providerGithub = new firebase.auth.GithubAuthProvider();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(providerGoogle)
      .then((res) => {
        if (res.user.uid) {
          localStorage.setItem("name", res.user.displayName);
          localStorage.setItem("email", res.user.email);
          localStorage.setItem("uid", res.user.uid);
          localStorage.setItem("logged", true);
          AddData(res.user);
          history.push("/home");
        }
      })
      .catch((error) => alert(error.message));
  };
  const signInWithFacebook = () => {
    auth
      .signInWithPopup(providerFacebook)
      .then((res) => {
        if (res.user.uid) {
          localStorage.setItem("name", res.user.displayName);
          localStorage.setItem("email", res.user.email);
          localStorage.setItem("uid", res.user.uid);
          localStorage.setItem("logged", true);
          AddData(res.user);
          history.push("/home");
        }
      })
      .catch((error) => alert(error.message));
  };
  const signInWithGithub = () => {
    auth
      .signInWithPopup(providerGithub)
      .then((res) => {
        if (res.user.uid) {
          localStorage.setItem("name", res.user.displayName);
          localStorage.setItem("email", res.user.email);
          localStorage.setItem("uid", res.user.uid);
          localStorage.setItem("logged", true);
          AddData(res.user);
          history.push("/home");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="grid-container">
      <Button
        onClick={signInWithGoogle}
        variant="outlined"
        style={{ textTransform: "none", paddingRight: "60px" }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRF__vDRer9N3lzmW-FJTnaiCi1Vd7TvcHrdcjzU28RHD2kcpRVdZIQhLvZaksbBPpak&usqp=CAU"
          style={{
            width: "20px",
            height: "20px",
            marginRight: "60px"
          }}
          alt="google"
        />
        Log in with Google
      </Button>
      <Button
        onClick={signInWithFacebook}
        variant="outlined"
        style={{
          textTransform: "none",
          paddingRight: "60px",
          marginTop: "20px"
        }}
      >
        <FacebookIcon color="primary" style={{ marginRight: "40px" }} />
        Log in with Facebook
      </Button>
      <Button
        onClick={signInWithGithub}
        variant="outlined"
        style={{
          textTransform: "none",
          paddingRight: "60px",
          marginTop: "20px"
        }}
      >
        <GitHubIcon style={{ marginRight: "60px" }} />
        Log in with Github
      </Button>
    </div>
  );
}
