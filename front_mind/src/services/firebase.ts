// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVTd6q0xT6MoKynsc2Grysvx_uSvN7D74",
  authDomain: "mind-48c91.firebaseapp.com",
  projectId: "mind-48c91",
  storageBucket: "mind-48c91.appspot.com",
  messagingSenderId: "600356704496",
  appId: "1:600356704496:web:0cd835c16ad0a9f2fc7235",
  measurementId: "G-F9270S9XDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);