import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAnEo6TOxe7ME4FSCISZ_Wm4VFvz5-aSDM",
    authDomain: "instagram-c29c1.firebaseapp.com",
    projectId: "instagram-c29c1",
    storageBucket: "instagram-c29c1.appspot.com",
    messagingSenderId: "936866023167",
    appId: "1:936866023167:web:05af1434b7048a8ea36eca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };