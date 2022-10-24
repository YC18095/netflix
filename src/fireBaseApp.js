// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQc6cp-jf_P1nldEQAEtHCb13uQDGvGFQ",
  authDomain: "netflix-65ed1.firebaseapp.com",
  projectId: "netflix-65ed1",
  storageBucket: "netflix-65ed1.appspot.com",
  messagingSenderId: "126892862896",
  appId: "1:126892862896:web:cb6e277fb89df40159ba75"
};

// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig)
const db = fireApp.firestore()
const auth = firebase.auth()
export { auth, db }
