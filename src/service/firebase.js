// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "castro-cd420.firebaseapp.com",
  projectId: "castro-cd420",
  storageBucket: "castro-cd420.appspot.com",
  messagingSenderId: "994085463376",
  appId: "1:994085463376:web:842e727c1e2c434b793855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);