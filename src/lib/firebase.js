import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage";

// here i want to import the seed file
import { seedDatabase } from '../seed';




const config = {
    apiKey: "AIzaSyBwwZEsFLuRXNM2FhzNyfjypRzGGqnAprE",
    authDomain: "onlymemes-db213.firebaseapp.com",
    databaseURL: "https://onlymemes-db213-default-rtdb.firebaseio.com",
    projectId: "onlymemes-db213",
    storageBucket: "onlymemes-db213.appspot.com",
    messagingSenderId: "215653602247",
    appId: "1:215653602247:web:b499af4cf341de0ca07fe2"
  };

  const firebase = Firebase.initializeApp(config);
  const { FieldValue } = Firebase.firestore;
  const storage = firebase.storage();
 
//here is where i want to call
seedDatabase(firebase);

export { firebase, FieldValue, storage };
  