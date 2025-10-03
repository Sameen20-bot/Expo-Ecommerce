import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDkWDKXb0z3dgq0hrZvvChL_X7D2M4gHD8",
  authDomain: "smart-e-commerce-app-5f883.firebaseapp.com",
  projectId: "smart-e-commerce-app-5f883",
  storageBucket: "smart-e-commerce-app-5f883.firebasestorage.app",
  messagingSenderId: "560471739539",
  appId: "1:560471739539:web:8b35a7ae19b08cc7949166",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
