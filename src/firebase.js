import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBD-8w7-gxOzUffOwOGPmmuZh9vUmynCNw",
  authDomain: "challenge2-5360c.firebaseapp.com",
  projectId: "challenge2-5360c",
  storageBucket: "challenge2-5360c.appspot.com",
  messagingSenderId: "748421416886",
  appId: "1:748421416886:web:81d9306cf0f7c30c2d6317",
  measurementId: "G-DV35QBR5C5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };