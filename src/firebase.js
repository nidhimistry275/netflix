import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcKC0p7PjT5JGkAHFlpo_o5nlf-K-6V7M",
  authDomain: "netflix-e6a1a.firebaseapp.com",
  projectId: "netflix-e6a1a",
  storageBucket: "netflix-e6a1a.appspot.com",
  messagingSenderId: "496937200645",
  appId: "1:496937200645:web:b876a6f61b47f41390806c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
