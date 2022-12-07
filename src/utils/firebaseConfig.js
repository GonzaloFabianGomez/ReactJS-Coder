// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArA1JS_zLqIwiQuSBKsMsbSB-l5U4d-Aw",
    authDomain: "electro-shop-reactjs-coder.firebaseapp.com",
    projectId: "electro-shop-reactjs-coder",
    storageBucket: "electro-shop-reactjs-coder.appspot.com",
    messagingSenderId: "562222910979",
    appId: "1:562222910979:web:edc790db26787aadb90836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);