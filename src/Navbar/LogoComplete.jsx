import React from "react";
import Logo from "./Logo";
import "./LogoComplete.css";

export default function LogoComplete() {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <div className="logo">
            <Logo />
          </div>
        </li>
        <li className="title">Webiclass</li>
      </ul>
    </div>
  );
}
