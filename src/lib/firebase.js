import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwwZEsFLuRXNM2FhzNyfjypRzGGqnAprE",
  authDomain: "onlymemes-db213.firebaseapp.com",
  databaseURL: "https://onlymemes-db213-default-rtdb.firebaseio.com",
  projectId: "onlymemes-db213",
  storageBucket: "onlymemes-db213.appspot.com",
  messagingSenderId: "215653602247",
  appId: "1:215653602247:web:8f270bcc0838b097a07fe2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };








































// //Namespace refers to same name for different objects.
// //This import loads the firebase namespace along with all its type information
// import Firebase from "firebase";
// //This import load individual services into firebase namespace.
// import 'firebase/firestore';
// import 'firebase/auth';
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBwwZEsFLuRXNM2FhzNyfjypRzGGqnAprE",
//   authDomain: "onlymemes-db213.firebaseapp.com",
//   databaseURL: "https://onlymemes-db213-default-rtdb.firebaseio.com",
//   projectId: "onlymemes-db213",
//   storageBucket: "onlymemes-db213.appspot.com",
//   messagingSenderId: "215653602247",
//   appId: "1:215653602247:web:8f270bcc0838b097a07fe2"
// };

// // Initialize Firebase
// const firebase = Firebase.initializeApp(firebaseConfig);
// const { FieldValue } = Firebase.firestore;

// export { firebase, FieldValue };