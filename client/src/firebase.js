/** @format */

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAFEb3EQh8IK_fjfRNxObdOz7k_Hx6M7tw",
  authDomain: "clone-80d3c.firebaseapp.com",
  projectId: "clone-80d3c",
  storageBucket: "clone-80d3c.appspot.com",
  messagingSenderId: "1055037169150",
  appId: "1:1055037169150:web:31db6abdc36e1c371bb4af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
