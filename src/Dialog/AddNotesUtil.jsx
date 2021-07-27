import db from "../firebase";

export default function Util(filen, name, sem, branch, url) {
  const file = url;
  const sfDocRef2 = db.collection("notes").doc(filen);
  db.runTransaction((transaction) => {
    return transaction.get(sfDocRef2).then((sfDoc) => {
      if (!sfDoc.exists) {
        db.collection("notes")
          .doc(filen)
          .set({
            user: localStorage.getItem("name"),
            name: name,
            sem: sem,
            branch: branch,
            file: file
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    });
  })
    .then((newData) => {
      console.log("New data added if doesn't exist");
    })
    .catch((err) => {
      console.error(err);
    });
}
