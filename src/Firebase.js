import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA56H0LJuiAQfYDIBZSEgGC_eUAk2IAgY4",
  authDomain: "tinder-clone-bd86b.firebaseapp.com",
  databaseURL: "https://tinder-clone-bd86b.firebaseio.com",
  projectId: "tinder-clone-bd86b",
  storageBucket: "tinder-clone-bd86b.appspot.com",
  messagingSenderId: "485655635687",
  appId: "1:485655635687:web:f80374c954d885233c6442",
  measurementId: "G-W6P2362JFR"
};

const fiirebaseApp = firebase.initializeApp(firebaseConfig);

const database = fiirebaseApp.firestore();

export default database;
