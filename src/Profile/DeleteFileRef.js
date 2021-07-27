import db from "../firebase";

export default function UtilDelete(file) {
  db.collection("notes")
    .doc(file)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}
