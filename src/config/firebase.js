// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5wi50Wsuh85AyXlVIgfVUWJmvOmaYWdw",
  authDomain: "fir-tutorial-2c822.firebaseapp.com",
  projectId: "fir-tutorial-2c822",
  storageBucket: "fir-tutorial-2c822.appspot.com",
  messagingSenderId: "756230752186",
  appId: "1:756230752186:web:5325c09dacd573b2e2ff83",
  measurementId: "G-PCRXN8EDE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore (app);
export default app
