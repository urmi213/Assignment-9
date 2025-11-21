// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // <-- REQUIRED IMPORT

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_zpSwEIXOWRJRiQHHXrANnWSUZlqqiXM",
  authDomain: "assignment-9-cbe11.firebaseapp.com",
  projectId: "assignment-9-cbe11",
  storageBucket: "assignment-9-cbe11.firebasestorage.app",
  messagingSenderId: "12545645174",
  appId: "1:12545645174:web:f0442f61c3d0010694dd57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);  // <-- This now works

export default app;
