import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBwwZEsFLuRXNM2FhzNyfjypRzGGqnAprE",
    authDomain: "onlymemes-db213.firebaseapp.com",
    databaseURL: "https://onlymemes-db213-default-rtdb.firebaseio.com",
    projectId: "onlymemes-db213",
    storageBucket: "onlymemes-db213.appspot.com",
    messagingSenderId: "215653602247",
    appId: "1:215653602247:web:b499af4cf341de0ca07fe2"
  };

firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
 
export { auth, db, storage }; 
export default firebase;