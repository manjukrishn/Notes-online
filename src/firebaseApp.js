import firebase from "firebase";
import 'firebase/storage'; 
import {config} from "./Config";
export const firebaseApp=()=>{
  return!firebase.apps.length
    ? firebase.initializeApp(config())
    : firebase.app();
}