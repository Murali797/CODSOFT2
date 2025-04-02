// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "project-management-e93ef.firebaseapp.com",
  projectId: "project-management-e93ef",
  storageBucket: "project-management-e93ef.firebasestorage.app",
  messagingSenderId: "210699751315",
  appId: "1:210699751315:web:888ceab2c382204c96e266",
  measurementId: "G-ZC7GXV69YZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);