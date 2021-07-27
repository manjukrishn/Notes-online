import firebase from "firebase";
import "firebase/storage";

export default function Upload(file, genfile) {
  const storage = firebase.storage().ref().child(`notes/${genfile}`);

  let uploadTask = storage.put(file).then((snapshot)=>{
      return snapshot.ref.getDownloadURL();
  });
  return uploadTask;
}
