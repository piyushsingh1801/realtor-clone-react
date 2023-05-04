// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPWlCY23rAvRDqpyU9BFlkUjAxMpg0bdI",
  authDomain: "realtor-clone-react-c713b.firebaseapp.com",
  projectId: "realtor-clone-react-c713b",
  storageBucket: "realtor-clone-react-c713b.appspot.com",
  messagingSenderId: "629750412848",
  appId: "1:629750412848:web:691373328476d09e13dff5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();