import firebase from './firebase'

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
