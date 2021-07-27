import db from "../firebase";

export default function UtilDelete(file) {
  const uid = localStorage.getItem("uid");
  var docRef = db.collection("users").doc(uid);
  let arr = [];
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        for (let i = 0; i < doc.data().notes.length; i++) {
          if (doc.data().notes[i].date !== file) arr.push(doc.data().notes[i]);
        }
        return docRef
          .update({
            notes: doc.data().notes.filter((item) => item.date !== file)
          })
          .then(() => {
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
