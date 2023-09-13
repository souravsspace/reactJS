import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type userType = {
  email: string;
  password: string;
};

type AuthContextType = {
  currentUser: userType | null;
  signUp: ({ email, password }: userType) => void;
  login: ({ email, password }: userType) => void;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<any>();

  function signUp(user: userType) {
    return createUserWithEmailAndPassword(auth, user.email, user.password);
  }

  function login(user: userType) {
    return signInWithEmailAndPassword(auth, user.email, user.password);
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
