
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtS3PmEMJG6i8rWB6icsMS9kLsUCLFKgc",
    authDomain: "react1-ac1f5.firebaseapp.com",
    databaseURL: "https://react1-ac1f5-default-rtdb.firebaseio.com",
    projectId: "react1-ac1f5",
    storageBucket: "react1-ac1f5.appspot.com",
    messagingSenderId: "61625334304",
    appId: "1:61625334304:web:cd6724475c84f0f9859a45"
};

// Initialize Firebase
const firebaseDb = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

//const app = initializeApp(firebaseConfig);