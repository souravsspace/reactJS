import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";

import firebaseApp from "../Firebase/Firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  const auth = getAuth(firebaseApp);

  const [currentUser, setCurrentUser] = useState();

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
}
