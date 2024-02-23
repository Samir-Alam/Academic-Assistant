// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyCOforGRrhOxYuni04XTwdXfKnoiK6mn5Y",
//   authDomain: "fir-authentication-9525-1ba12.firebaseapp.com",
//   projectId: "fir-authentication-9525-1ba12",
//   storageBucket: "fir-authentication-9525-1ba12.appspot.com",
//   messagingSenderId: "861350540369",
//   appId: "1:861350540369:web:6f8011baf566fdcd2fb470",
//   measurementId: "G-GWTX6Y7YT2",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCrYiq9H7fJEjtWs2b73uZRssbGJM7-d6Y",
  authDomain: "academic-assistant-0001.firebaseapp.com",
  databaseURL: "https://academic-assistant-0001-default-rtdb.firebaseio.com",
  projectId: "academic-assistant-0001",
  storageBucket: "academic-assistant-0001.appspot.com",
  messagingSenderId: "625818680665",
  appId: "1:625818680665:web:5af2ba80c92f611a0be048",
  measurementId: "G-S5GPNLRJP8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
// const currUser = auth.currentUser;

const writeUserData = (userId, name, email, pass, gender) => {
  
    const db = getDatabase();
    const reference = ref(db, "users/" + userId);
    
    set(reference, {
    username: name,
    email: email,
    password: pass,
    gender: gender
    });
}

export { app, auth, writeUserData};
