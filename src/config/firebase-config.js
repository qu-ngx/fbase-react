// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBajs3PK_oZoSYBhqv5_B_Y3ds3cy9KgXQ",
    authDomain: "fir-learn-edd77.firebaseapp.com",
    projectId: "fir-learn-edd77",
    storageBucket: "fir-learn-edd77.appspot.com",
    messagingSenderId: "1033896681374",
    appId: "1:1033896681374:web:8e3fdc4c70308e41fe808f",
    measurementId: "G-04VT1Z8YXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);