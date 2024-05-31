"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB59vAYMQIvwDJ1l8DNL2GR8eHdR8Pca9w",
  authDomain: "projeto-authentication.firebaseapp.com",
  projectId: "projeto-authentication",
  storageBucket: "projeto-authentication.appspot.com",
  messagingSenderId: "442023954654",
  appId: "1:442023954654:web:231119a4d40afd27d5da4f",
  measurementId: "G-JEQZLJ5H36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account ",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
