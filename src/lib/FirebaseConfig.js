import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBnbRfW6alDqmqEnWSSlLt_tbyekjcdjE",
    authDomain: "react-cda.firebaseapp.com",
    projectId: "react-cda",
    storageBucket: "react-cda.appspot.com",
    messagingSenderId: "342074867179",
    appId: "1:342074867179:web:c1afe7bf11e4d8f0422dae"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);