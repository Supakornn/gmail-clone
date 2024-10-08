import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARP8rBon3fA6MV71hwRBv0dMkjWZg22L0",
  authDomain: "clone-6503d.firebaseapp.com",
  projectId: "clone-6503d",
  storageBucket: "clone-6503d.appspot.com",
  messagingSenderId: "723438848136",
  appId: "1:723438848136:web:6c716a40753fa1ccd9373d",
  measurementId: "G-VGS4PQP53Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new GoogleAuthProvider();
export { db, auth, provider };
