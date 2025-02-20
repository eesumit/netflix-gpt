// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9zpYJZyOOfxhIwCgPzDb-guxs7wTtmPw",
  authDomain: "netflixgpt-948ed.firebaseapp.com",
  projectId: "netflixgpt-948ed",
  storageBucket: "netflixgpt-948ed.firebasestorage.app",
  messagingSenderId: "276915794508",
  appId: "1:276915794508:web:82d78e8c2f8f2260e2bae9",
  measurementId: "G-05TCRCNTLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();