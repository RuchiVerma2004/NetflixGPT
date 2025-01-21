// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0vvmdrSe0pMuswGlhk9MGyYodS2LqRxM",
  authDomain: "netflixgpt-5fef9.firebaseapp.com",
  projectId: "netflixgpt-5fef9",
  storageBucket: "netflixgpt-5fef9.firebasestorage.app",
  messagingSenderId: "315208157446",
  appId: "1:315208157446:web:3e3e020be0002768ed7687",
  measurementId: "G-HPYQE3N5V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();