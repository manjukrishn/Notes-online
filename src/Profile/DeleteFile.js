import firebase from "firebase/app";
import "firebase/storage";

export default function DeleteFile(file) {
  const storageRef = firebase.storage().ref();
  var fileRef = storageRef.child("notes/"+file);

  fileRef
    .delete()
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
}
