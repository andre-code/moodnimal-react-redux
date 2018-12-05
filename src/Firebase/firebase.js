import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCq8b5uQ7kbPTR3d6LpDwKKwHiM8zMz2Lg",
    authDomain: "moodnimal.firebaseapp.com",
    databaseURL: "https://moodnimal.firebaseio.com",
    projectId: "moodnimal",
    storageBucket: "moodnimal.appspot.com",
    messagingSenderId: "38572678760"
};
firebase.initializeApp(config);
//const databaseRef = firebase.database().ref();
export const firestore = firebase.firestore();
/* export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider(); */
