import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v9 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlMBxpf06toWMEi5Evvpp9MGN7KAqXt7M",
  authDomain: "designo-backend.firebaseapp.com",
  projectId: "designo-backend",
  storageBucket: "designo-backend.appspot.com",
  messagingSenderId: "381728274459",
  appId: "1:381728274459:web:126354bff52868df73e0be"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get the Firestore database instance.
export const db = getFirestore(app);

// Start using Firebase services.