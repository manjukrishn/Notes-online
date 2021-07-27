import db from "../firebase";

export default function AddData(data) {
  const sfDocRef = db.collection("users").doc(data.uid);
  db.runTransaction((transaction) => {
    return transaction.get(sfDocRef).then((sfDoc) => {
      if (!sfDoc.exists) {
        db.collection("users")
          .doc(data.uid)
          .set({
            name: data.displayName,
            uid: data.uid,
            email: data.email
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
