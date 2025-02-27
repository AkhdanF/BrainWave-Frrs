// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi7PtQmOR0nfiVbGd2GAuQR8mQK8TuXzE",
  authDomain: "brainwaveai-frrs.firebaseapp.com",
  projectId: "brainwaveai-frrs",
  storageBucket: "brainwaveai-frrs.firebasestorage.app",
  messagingSenderId: "563251203223",
  appId: "1:563251203223:web:df53d6831c86924456edd2",
  measurementId: "G-2DWBVPBDPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
