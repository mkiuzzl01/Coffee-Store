// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";    

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8UAmjyiV3VIBCGORa-0T7Tk5X1q-B5Ig",
  authDomain: "coffee-store-2b3c4.firebaseapp.com",
  projectId: "coffee-store-2b3c4",
  storageBucket: "coffee-store-2b3c4.appspot.com",
  messagingSenderId: "370972391861",
  appId: "1:370972391861:web:162e5f3136abae9ce041fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

