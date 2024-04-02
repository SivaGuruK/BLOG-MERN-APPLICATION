// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-71a6e.firebaseapp.com",
  projectId: "mernblog-71a6e",
  storageBucket: "mernblog-71a6e.appspot.com",
  messagingSenderId: "725959083611",
  appId: "1:725959083611:web:7dd109b7eb7d4ae2e2e17e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
