// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQNUX3trbIeVzeVbhl7nuzKOQPD35q1RU",
  authDomain: "mern-book-inventory-746ab.firebaseapp.com",
  projectId: "mern-book-inventory-746ab",
  storageBucket: "mern-book-inventory-746ab.appspot.com",
  messagingSenderId: "794560528838",
  appId: "1:794560528838:web:0e7c9700b8710d71e632c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;