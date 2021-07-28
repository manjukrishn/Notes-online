import React from "react";
import Home from "./Home";
import Navbar from "../Navbar/Navbar";
import db from "../firebase";
import _ from "lodash";

import Topbar from "../Navbar/Topbar";
export default function App() {
  const [searchItem, setSearch] = React.useState();
  const [searchedArr, setSearched] = React.useState([]);
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const arr = [];
    db.collection("notes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr.push({
            date: doc.id,
            file: doc.data().file,
            sem: doc.data().sem,
            branch: doc.data().branch,
            user: doc.data().user,
            name: doc.data().name
          });
        });
        setNotes(arr);
        setSearched(arr);
      });
  }, []);
  const contains = ({ date, name, sem, user, branch }, query) => {
    if (
      date.toLowerCase().includes(query) ||
      name.toLowerCase().includes(query) ||
      sem.toLowerCase().includes(query) ||
      user.toLowerCase().includes(query) ||
      branch.toLowerCase().includes(query)
    )
      return true;
    return false;
  };

  const searchFilter = (text) => {
    if(text === undefined)return;
    const formattedQuery = text.toLowerCase();
    const data = _.filter(notes, (sch) => {
      return contains(sch, formattedQuery.toLowerCase());
    });
    console.log(formattedQuery);
    setSearch(formattedQuery);
    setSearched(data);
  };
  const search = (items) => {
    searchFilter(items);
    setSearch(items);
    console.log(items);
  };
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: "0px", marginTop: "-10px" }}>
        <Topbar change={search} />
      </div>
      <Home searchItem={searchedArr} />
    </div>
  );
}
