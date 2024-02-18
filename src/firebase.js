// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOforGRrhOxYuni04XTwdXfKnoiK6mn5Y",
  authDomain: "fir-authentication-9525-1ba12.firebaseapp.com",
  projectId: "fir-authentication-9525-1ba12",
  storageBucket: "fir-authentication-9525-1ba12.appspot.com",
  messagingSenderId: "861350540369",
  appId: "1:861350540369:web:6f8011baf566fdcd2fb470",
  measurementId: "G-GWTX6Y7YT2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
