
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1UY5Nzr6t0sPQJXlG0TR1RDKCPK2GHck",
  authDomain: "mukesh-portfolio-1b3e0.firebaseapp.com",
  projectId: "mukesh-portfolio-1b3e0",
  storageBucket: "mukesh-portfolio-1b3e0.firebasestorage.app",
  messagingSenderId: "612290860544",
  appId: "1:612290860544:web:e3ae0de3f69f27ec3aaae5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);