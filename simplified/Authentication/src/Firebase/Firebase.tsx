import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNmxzrN2VNBn9PXlpVlI-D19_YNG4WrwA",
  authDomain: "auth-development-d168b.firebaseapp.com",
  projectId: "auth-development-d168b",
  storageBucket: "auth-development-d168b.appspot.com",
  messagingSenderId: "173802704339",
  appId: "1:173802704339:web:a2252a6fe17e9775d7b326",
  measurementId: "G-R5JD5X4R61",
});

export const Auth = firebase.auth();
export default firebaseApp;

// apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
// authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: import.meta.env
//   .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
// measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID,