import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_zpSwEIXOWRJRiQHHXrANnWSUZlqqiXM",
  authDomain: "assignment-9-cbe11.firebaseapp.com",
  projectId: "assignment-9-cbe11",
  storageBucket: "assignment-9-cbe11.appspot.com",
  messagingSenderId: "12545645174",
  appId: "1:12545645174:web:f0442f61c3d0010694dd57"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
