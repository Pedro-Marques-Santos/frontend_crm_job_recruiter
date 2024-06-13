"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7auFA1ylSp7rys_vNkoNaCee2obURTcs",
  authDomain: "projet-crm-firebase.firebaseapp.com",
  projectId: "projet-crm-firebase",
  storageBucket: "projet-crm-firebase.appspot.com",
  messagingSenderId: "330944654164",
  appId: "1:330944654164:web:48c9f6a5960d90eabb36c1",
  measurementId: "G-N5MPNS0R5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account ",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
