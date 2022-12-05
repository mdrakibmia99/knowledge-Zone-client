import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGpsiNELT6EW5yUUWb67n-yKW5Px8hsy4",
  authDomain: "knowledge-zone-c97ee.firebaseapp.com",
  projectId: "knowledge-zone-c97ee",
  storageBucket: "knowledge-zone-c97ee.appspot.com",
  messagingSenderId: "1096196389989",
  appId: "1:1096196389989:web:5f6d2eab2a719900c95a8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
