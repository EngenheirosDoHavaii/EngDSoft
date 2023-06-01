// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCbziaFqjmMWDue35nE3HgVRzzDeziJDHc",
  authDomain: "mind-e-d12ca.firebaseapp.com",
  projectId: "mind-e-d12ca",
  storageBucket: "mind-e-d12ca.appspot.com",
  messagingSenderId: "909807882920",
  appId: "1:909807882920:web:6188a8622aac58f620689d",
  measurementId: "G-JXCQMDDP5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    analytics,
    auth,
    db,
};