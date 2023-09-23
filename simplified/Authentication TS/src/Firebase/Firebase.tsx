import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCNmxzrN2VNBn9PXlpVlI-D19_YNG4WrwA",
  authDomain: "auth-development-d168b.firebaseapp.com",
  projectId: "auth-development-d168b",
  storageBucket: "auth-development-d168b.appspot.com",
  messagingSenderId: "173802704339",
  appId: "1:173802704339:web:a2252a6fe17e9775d7b326",
  measurementId: "G-R5JD5X4R61",
});

export const auth = getAuth(firebaseApp);

export default firebaseApp;
