// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASasZuXLrUyIbgQIpLViqV3YicxojXVEc",
  authDomain: "bhtrip-2023.firebaseapp.com",
  projectId: "bhtrip-2023",
  storageBucket: "bhtrip-2023.appspot.com",
  messagingSenderId: "973573092059",
  appId: "1:973573092059:web:0a308d5c494755222e52fe",
  measurementId: "G-58ZK2W7B6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);