import React from "react";
import Textfield from "./Textfield";
import Desc from "./DescTableComplete";
import AddNotes from "../Dialog/AddNotes";
import db from "../firebase";
export default function Profile() {
  function createData(label, value) {
    return { label, value };
  }
  const [userFiles, setUserFiles] = React.useState([]);

  React.useEffect(() => {
    // let arr = [];
    db.collection("users")
      .doc(localStorage.getItem("uid"))
      .onSnapshot((doc) => {
        // arr = doc.data().notes;
        setUserFiles(doc.data().notes);
      });
    // console.log(arr);
  }, []);
  const rows = [];
  rows.push(createData("Name", localStorage.getItem("name")));
  rows.push(createData("Email", localStorage.getItem("email")));
  return (
    <div style={{ position: "relative",zIndex:"1" }}>
      <AddNotes />
      <div className="profiledetails-textfield">
        {rows.map((item, index) => {
          return (
            <div style={{ display: "inline", marginLeft: "10px" }}>
              <Textfield label={item.label} value={item.value} />
            </div>
          );
        })}
      </div>
      <Desc />
    </div>
  );
}
