import { db } from "../lib/firebase";
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore();

export async function doesUsernameExist(username) {
  const result = await db
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.length > 0;
}