// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA53xSEzprOUqZCqphJV8ddR0wQcxqGPcs",
    authDomain: "crypto-chord.firebaseapp.com",
    projectId: "crypto-chord",
    storageBucket: "crypto-chord.appspot.com",
    messagingSenderId: "773726248533",
    appId: "1:773726248533:web:43dcb13c01186acc487edc",
    measurementId: "G-G6533DTC5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
