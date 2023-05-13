// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDuU39TGslFodP6TWN4B9NWLN5j4t6Qq-Q",
  authDomain: "nskstore-40a6e.firebaseapp.com",
  projectId: "nskstore-40a6e",
  storageBucket: "nskstore-40a6e.appspot.com",
  messagingSenderId: "76746296732",
  appId: "1:76746296732:web:d7c752060d2c5c22d80c59",
  measurementId: "G-MFT5Q7F3F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);