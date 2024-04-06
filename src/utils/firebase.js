// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-61939.firebaseapp.com",
  projectId: "blogapp-61939",
  storageBucket: "blogapp-61939.appspot.com",
  messagingSenderId: "517985844243",
  appId: "1:517985844243:web:edef2ac3fd0796ffef93e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);