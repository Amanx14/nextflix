// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ0OXfo83eshQWtNc6LeUiir-P7THZSBY",
  authDomain: "netflix-gpt-904b8.firebaseapp.com",
  projectId: "netflix-gpt-904b8",
  storageBucket: "netflix-gpt-904b8.firebasestorage.app",
  messagingSenderId: "601613245259",
  appId: "1:601613245259:web:54f5135188024428e0a6ce",
  measurementId: "G-BRS3E82CJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth();