// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCASMEHiWSq5fpVGmkw9S7nbN9XmdaW5Zs",
  authDomain: "mminstalling.firebaseapp.com",
  projectId: "mminstalling",
  storageBucket: "mminstalling.appspot.com",
  messagingSenderId: "155378965682",
  appId: "1:155378965682:web:857574ed93b47d84e4bdab",
  measurementId: "G-YJTQCXN85Q"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
