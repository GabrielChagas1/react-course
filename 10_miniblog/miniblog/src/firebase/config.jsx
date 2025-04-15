// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABdFTi2dE3M8CA64yxZ9ZOFlRm7_c-vUc",
  authDomain: "miniblog-ref-61147.firebaseapp.com",
  projectId: "miniblog-ref-61147",
  storageBucket: "miniblog-ref-61147.firebasestorage.app",
  messagingSenderId: "40927814807",
  appId: "1:40927814807:web:0a761f7a3538f07b31f5d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export {db, app }