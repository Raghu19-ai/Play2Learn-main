// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQgFyhNohdhbSC7QkM0QmPUUa-voxMEQw",
  authDomain: "play2learn-b84ef.firebaseapp.com",
  projectId: "play2learn-b84ef",
  storageBucket: "play2learn-b84ef.firebasestorage.app",
  messagingSenderId: "385714339470",
  appId: "1:385714339470:web:a4af2fb156659f85dd13df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("email");
googleProvider.addScope("profile");
googleProvider.setCustomParameters({
  prompt: "select_account",
});

console.log("Firebase Auth initialized:", !!auth);
console.log("Google Provider configured:", !!googleProvider);
