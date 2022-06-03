// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyC17bzXnW6rJE_tQ6qJ9gRSCsFJIMS8VOU",
  authDomain: "clone-e9b89.firebaseapp.com",
  projectId: "clone-e9b89",
  storageBucket: "clone-e9b89.appspot.com",
  messagingSenderId: "982431884951",
  appId: "1:982431884951:web:5859f86a8a8e56546c2bd2",
  measurementId: "G-2WZMRNH0ZB",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
