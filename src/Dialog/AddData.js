import firebase from "firebase";
import db from "../firebase";

export default function AddData(file, name, sem, branch, filename) {
  const data = localStorage.getItem("uid");
  const newdata = {
    name: name,
    sem: sem,
    branch: branch,
    file: file,
    date: filename
  };
  const sfDocRef = db.collection("users").doc(data);
  db.runTransaction((transaction) => {
    return transaction.get(sfDocRef).then((sfDoc) => {
      if (sfDoc.exists) {
        db.collection("users")
          .doc(data)
          .update({
            notes: firebase.firestore.FieldValue.arrayUnion(newdata)
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      }
    });
  })
    .then((newData) => {
      console.log("Data updated if exists");
    })
    .catch((err) => {
      console.error(err);
    });
}
