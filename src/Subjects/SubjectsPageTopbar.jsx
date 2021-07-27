import React from "react";
import Card from "./SubjectCard";
export default function Topbar() {
  let x = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
  ];
  return (
    <div className="subjectspage-topbar-wrapper">
      {x.map((item, index) => {
        return (
          <div
            style={{
              display: "inline",
              marginLeft: "15px"
            }}
          >
            <Card />
          </div>
        );
      })}
    </div>
  );
}
